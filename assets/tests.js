'use strict';

define("dummy/tests/helpers/ember-power-select", ["exports", "ember-power-select/test-support/helpers"], function (_exports, _helpers) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = deprecatedRegisterHelpers;
  _exports.selectChoose = _exports.touchTrigger = _exports.nativeTouch = _exports.clickTrigger = _exports.typeInSearch = _exports.triggerKeydown = _exports.nativeMouseUp = _exports.nativeMouseDown = _exports.findContains = void 0;

  function deprecateHelper(fn, name) {
    return function () {
      (true && !(false) && Ember.deprecate("DEPRECATED `import { ".concat(name, " } from '../../tests/helpers/ember-power-select';` is deprecated. Please, replace it with `import { ").concat(name, " } from 'ember-power-select/test-support/helpers';`"), false, {
        until: '1.11.0',
        id: "ember-power-select-test-support-".concat(name)
      }));
      return fn.apply(void 0, arguments);
    };
  }

  var findContains = deprecateHelper(_helpers.findContains, 'findContains');
  _exports.findContains = findContains;
  var nativeMouseDown = deprecateHelper(_helpers.nativeMouseDown, 'nativeMouseDown');
  _exports.nativeMouseDown = nativeMouseDown;
  var nativeMouseUp = deprecateHelper(_helpers.nativeMouseUp, 'nativeMouseUp');
  _exports.nativeMouseUp = nativeMouseUp;
  var triggerKeydown = deprecateHelper(_helpers.triggerKeydown, 'triggerKeydown');
  _exports.triggerKeydown = triggerKeydown;
  var typeInSearch = deprecateHelper(_helpers.typeInSearch, 'typeInSearch');
  _exports.typeInSearch = typeInSearch;
  var clickTrigger = deprecateHelper(_helpers.clickTrigger, 'clickTrigger');
  _exports.clickTrigger = clickTrigger;
  var nativeTouch = deprecateHelper(_helpers.nativeTouch, 'nativeTouch');
  _exports.nativeTouch = nativeTouch;
  var touchTrigger = deprecateHelper(_helpers.touchTrigger, 'touchTrigger');
  _exports.touchTrigger = touchTrigger;
  var selectChoose = deprecateHelper(_helpers.selectChoose, 'selectChoose');
  _exports.selectChoose = selectChoose;

  function deprecatedRegisterHelpers() {
    (true && !(false) && Ember.deprecate("DEPRECATED `import registerPowerSelectHelpers from '../../tests/helpers/ember-power-select';` is deprecated. Please, replace it with `import registerPowerSelectHelpers from 'ember-power-select/test-support/helpers';`", false, {
      until: '1.11.0',
      id: 'ember-power-select-test-support-register-helpers'
    }));
    return (0, _helpers.default)();
  }
});
define("dummy/tests/helpers/setup-router", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _default;

  /* eslint-disable ember/no-private-routing-service */
  function _default(hooks) {
    hooks.beforeEach(function () {
      var router = this.owner.lookup('router:main');
      router.startRouting(true);
    });
  }
});
define("dummy/tests/integration/components/denali-alert-inline-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | denali-alert-inline', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders in block form', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                assert.expect(1);
                _context.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliAlertInline>
                      </DenaliAlertInline>
                    
                */
                {"id":"ebBUi2jo","block":"{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"denali-alert-inline\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 3:
                assert.dom('div.alert.is-inline').exists('Inline alert renders in block form correctly');

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it renders in non-block form', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                assert.expect(1);
                _context2.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliAlertInline/>
                    
                */
                {"id":"MmBh2yxO","block":"{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"denali-alert-inline\",[],[[],[]],null],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 3:
                assert.dom('div.alert.is-inline').exists('Inline alert renders in non-block form correctly');

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it can yield a title sub component in block form', /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                assert.expect(1);
                _context3.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliAlertInline as |Alert|>
                        <Alert.Title>Test Title</Alert.Title>
                      </DenaliAlertInline>
                    
                */
                {"id":"svHCoINo","block":"{\"symbols\":[\"Alert\"],\"statements\":[[2,\"\\n      \"],[8,\"denali-alert-inline\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[8,[32,1,[\"Title\"]],[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"Test Title\"]],\"parameters\":[]}]]],[2,\"\\n      \"]],\"parameters\":[1]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 3:
                assert.dom('.alert span.is-bold').hasText('Test Title', 'DenaliAlertInline yields a title sub component');

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it can render a title in non-block form', /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(assert) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                assert.expect(1);
                _context4.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                        <DenaliAlertInline @title="Test Title"/>
                    
                */
                {"id":"AYIINsbn","block":"{\"symbols\":[],\"statements\":[[2,\"\\n        \"],[8,\"denali-alert-inline\",[],[[\"@title\"],[\"Test Title\"]],null],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 3:
                assert.dom('.alert span.is-bold').hasText('Test Title', 'DenaliAlertInline renders a title');

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function (_x4) {
        return _ref5.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it can yield a context sub component in block form', /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(assert) {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                assert.expect(2);
                _context5.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliAlertInline as |Alert|>
                        <Alert.Title>Test Title:</Alert.Title>
                        <Alert.Context>Alert Context Details</Alert.Context>
                      </DenaliAlertInline>
                    
                */
                {"id":"FfIRDTMI","block":"{\"symbols\":[\"Alert\"],\"statements\":[[2,\"\\n      \"],[8,\"denali-alert-inline\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[8,[32,1,[\"Title\"]],[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"Test Title:\"]],\"parameters\":[]}]]],[2,\"\\n        \"],[8,[32,1,[\"Context\"]],[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"Alert Context Details\"]],\"parameters\":[]}]]],[2,\"\\n      \"]],\"parameters\":[1]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 3:
                assert.dom('.alert span.is-bold').hasText('Test Title:', 'Only the title is bold');
                assert.dom('.alert p').hasText('Test Title: Alert Context Details', 'DenaliAlertInline renders both the title and context inside the p element');

              case 5:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      return function (_x5) {
        return _ref6.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it can render a context block in non-block form', /*#__PURE__*/function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(assert) {
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                assert.expect(2);
                _context6.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliAlertInline @title="Test Title:" @context="Alert Context Details"/>
                    
                */
                {"id":"pOxe2pBa","block":"{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"denali-alert-inline\",[],[[\"@title\",\"@context\"],[\"Test Title:\",\"Alert Context Details\"]],null],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 3:
                assert.dom('.alert span.is-bold').hasText('Test Title:', 'Only the title is bold');
                assert.dom('.alert p').hasText('Test Title: Alert Context Details', 'DenaliAlertInline renders both the title and context inside the p element');

              case 5:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      return function (_x6) {
        return _ref7.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it can render different alert styles', /*#__PURE__*/function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(assert) {
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                assert.expect(5);
                _context7.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliAlertInline @title="Alert Title:" @context="Hello World!" @style={{this.style}}/>
                    
                */
                {"id":"i46WCqv8","block":"{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"denali-alert-inline\",[],[[\"@title\",\"@context\",\"@style\"],[\"Alert Title:\",\"Hello World!\",[32,0,[\"style\"]]]],null],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 3:
                assert.dom('.alert.is-inline').hasNoClass('No class is added when style is not set');
                this.set('style', 'info');
                assert.dom('.alert.is-inline').hasClass('has-bg-status-info', 'DenaliAlertInline has info styles when `@style` arg is set to info');
                this.set('style', 'warning');
                assert.dom('.alert.is-inline').hasClass('has-bg-status-warning', 'DenaliAlertInline has warning styles when `@style` arg is set to warning');
                this.set('style', 'success');
                assert.dom('.alert.is-inline').hasClass('has-bg-status-success', 'DenaliAlertInline has success styles when `@style` arg is set to success');
                this.set('style', 'danger');
                assert.dom('.alert.is-inline').hasClass('has-bg-status-danger', 'DenaliAlertInline has danger styles when `@style` arg is set to danger');

              case 12:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      return function (_x7) {
        return _ref8.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/integration/components/denali-alert-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | denali-alert', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders in block form', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliAlert>
                      </DenaliAlert>
                    
                */
                {"id":"A4cBIYWz","block":"{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"denali-alert\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 2:
                assert.dom('div.alert').exists('DenaliAlert exists and renders a div with alert class');

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it renders in non-block form', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliAlert/>
                    
                */
                {"id":"51em0d30","block":"{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"denali-alert\",[],[[],[]],null],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 2:
                assert.dom('div.alert').exists('DenaliAlert exists and renders a div with alert class');

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it can yield a title sub component in block form', /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliAlert as |Alert|>
                        <Alert.Title>Alert Title!!1</Alert.Title>
                      </DenaliAlert>
                    
                */
                {"id":"QpK9xE/R","block":"{\"symbols\":[\"Alert\"],\"statements\":[[2,\"\\n      \"],[8,\"denali-alert\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[8,[32,1,[\"Title\"]],[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"Alert Title!!1\"]],\"parameters\":[]}]]],[2,\"\\n      \"]],\"parameters\":[1]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 2:
                assert.dom('.alert h5').hasText('Alert Title!!1', 'DenaliAlert yields a title sub component');

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it can render a title in non-block form', /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(assert) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                        <DenaliAlert @title="Alert Title!!1"/>
                    
                */
                {"id":"YIt/aJSt","block":"{\"symbols\":[],\"statements\":[[2,\"\\n        \"],[8,\"denali-alert\",[],[[\"@title\"],[\"Alert Title!!1\"]],null],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 2:
                assert.dom('.alert h5').hasText('Alert Title!!1', 'DenaliAlert renders a title');

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function (_x4) {
        return _ref5.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it can yield a context sub component in block form', /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(assert) {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliAlert as |Alert|>
                        <Alert.Title>Alert Title!!1</Alert.Title>
                        <Alert.Context>Alert Context Details</Alert.Context>
                      </DenaliAlert>
                    
                */
                {"id":"ZlnjQx/6","block":"{\"symbols\":[\"Alert\"],\"statements\":[[2,\"\\n      \"],[8,\"denali-alert\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[8,[32,1,[\"Title\"]],[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"Alert Title!!1\"]],\"parameters\":[]}]]],[2,\"\\n        \"],[8,[32,1,[\"Context\"]],[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"Alert Context Details\"]],\"parameters\":[]}]]],[2,\"\\n      \"]],\"parameters\":[1]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 2:
                assert.dom('.alert p').hasText('Alert Context Details', 'DenaliAlert renders a context block');

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      return function (_x5) {
        return _ref6.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it can render a context block in non-block form', /*#__PURE__*/function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(assert) {
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliAlert @title="Alert Title!!1" @context="Alert Context Details"/>
                    
                */
                {"id":"0KdjSb9K","block":"{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"denali-alert\",[],[[\"@title\",\"@context\"],[\"Alert Title!!1\",\"Alert Context Details\"]],null],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 2:
                assert.dom('.alert p').hasText('Alert Context Details', 'DenaliAlert renders a context block');

              case 3:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      return function (_x6) {
        return _ref7.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it supports block styles', /*#__PURE__*/function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(assert) {
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                        <DenaliAlert @title="Alert Title!!1" @isBlock={{this.isBlock}}/>
                    
                */
                {"id":"sLi71AWQ","block":"{\"symbols\":[],\"statements\":[[2,\"\\n        \"],[8,\"denali-alert\",[],[[\"@title\",\"@isBlock\"],[\"Alert Title!!1\",[32,0,[\"isBlock\"]]]],null],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 2:
                assert.dom('.alert').doesNotHaveClass('is-block', 'DenaliAlert does not have block styles by default');
                this.set('isBlock', true);
                assert.dom('.alert').hasClass('is-block', 'DenaliAlert has block styles when `@isBlock` arg is set to true');

              case 5:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      return function (_x7) {
        return _ref8.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it can render different alert styles', /*#__PURE__*/function () {
      var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(assert) {
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                        <DenaliAlert @title="Alert Title!!1" @style={{this.style}}/>
                    
                */
                {"id":"V4WsyZSi","block":"{\"symbols\":[],\"statements\":[[2,\"\\n        \"],[8,\"denali-alert\",[],[[\"@title\",\"@style\"],[\"Alert Title!!1\",[32,0,[\"style\"]]]],null],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 2:
                this.set('style', 'info');
                assert.dom('.alert').hasClass('is-info', 'DenaliAlert has info styles when `@style` arg is set to info');
                this.set('style', 'warning');
                assert.dom('.alert').hasClass('is-warning', 'DenaliAlert has warning styles when `@style` arg is set to warning');
                this.set('style', 'success');
                assert.dom('.alert').hasClass('is-success', 'DenaliAlert has success styles when `@style` arg is set to success');
                this.set('style', 'danger');
                assert.dom('.alert').hasClass('is-danger', 'DenaliAlert has danger styles when `@style` arg is set to danger');

              case 10:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      return function (_x8) {
        return _ref9.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it icons when provided with `icon` arg', /*#__PURE__*/function () {
      var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(assert) {
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliAlert
                        @title="Alert Title!!1"
                        @icon={{this.icon}}
                      />
                    
                */
                {"id":"L72FbL2q","block":"{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"denali-alert\",[],[[\"@title\",\"@icon\"],[\"Alert Title!!1\",[32,0,[\"icon\"]]]],null],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 2:
                assert.dom('.alert .d-icon').doesNotHaveClass('d-check-circle', 'DenaliAlert does not render an icon by default');
                this.set('icon', 'check-circle');
                assert.dom('.alert .d-icon').hasClass('d-check-circle', 'DenaliAlert renders the specified `@icon` arg');

              case 5:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      return function (_x9) {
        return _ref10.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it renders solid icons when `@isBlock` arg is true', /*#__PURE__*/function () {
      var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(assert) {
        return regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliAlert
                        @title="Alert Title!!1"
                        @style={{this.style}}
                        @isBlock={{true}}
                        @icon="check-circle"
                      />
                    
                */
                {"id":"4INIq8w1","block":"{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"denali-alert\",[],[[\"@title\",\"@style\",\"@isBlock\",\"@icon\"],[\"Alert Title!!1\",[32,0,[\"style\"]],true,\"check-circle\"]],null],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 2:
                assert.dom('.alert .d-icon').hasClass('d-check-circle-solid', 'DenaliAlert renders the solid notification icon by default when `@isBlock` is set to true');

              case 3:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10);
      }));

      return function (_x10) {
        return _ref11.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it can render a close button', /*#__PURE__*/function () {
      var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(assert) {
        return regeneratorRuntime.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                assert.expect(3);
                _context11.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                        <DenaliAlert @title="Alert Title!!1" @onClose={{this.onClose}}/>
                    
                */
                {"id":"SsC9dlwJ","block":"{\"symbols\":[],\"statements\":[[2,\"\\n        \"],[8,\"denali-alert\",[],[[\"@title\",\"@onClose\"],[\"Alert Title!!1\",[32,0,[\"onClose\"]]]],null],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 3:
                assert.dom('.alert span.close').doesNotExist('DenaliAlert does not render a close button by default');
                this.set('onClose', function (e) {
                  assert.equal(e.type, 'click', 'DenaliAlert will call `@onClose` action when close button is clicked');
                });
                assert.dom('.alert span.close').exists('DenaliAlert renders a close button when `@onClose` arg is provided');
                _context11.next = 8;
                return (0, _testHelpers.click)('.close');

              case 8:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      return function (_x11) {
        return _ref12.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/integration/components/denali-alert/context-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | denali-alert/context', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliAlert::Context class="my-context">
                        Inner Content
                      </DenaliAlert::Context>
                    
                */
                {"id":"KzsqVXb8","block":"{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"denali-alert/context\",[[24,0,\"my-context\"]],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        Inner Content\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 2:
                assert.dom('p.my-context').hasText('Inner Content', 'DenaliAlert::Context exists and renders inner content');

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/integration/components/denali-alert/title-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | denali-alert/title', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliAlert::Title class="my-title">
                        Inner Content
                      </DenaliAlert::Title>
                    
                */
                {"id":"+jAWNrzo","block":"{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"denali-alert/title\",[[24,0,\"my-title\"]],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        Inner Content\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 2:
                assert.dom('h5.my-title').hasText('Inner Content', 'DenaliAlert::Title exists and renders inner content');

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/integration/components/denali-box-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | denali-box', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliBox>
                        Inner Content
                      </DenaliBox>
                    
                */
                {"id":"E+eSulK6","block":"{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"denali-box\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        Inner Content\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 2:
                assert.dom('div.box').hasText('Inner Content', 'DenaliBox exists and renders inner content');

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it can yield a header component', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliBox as |Box|>
                        <Box.Header>Header</Box.Header>
                      </DenaliBox>
                    
                */
                {"id":"hu+v4p2S","block":"{\"symbols\":[\"Box\"],\"statements\":[[2,\"\\n      \"],[8,\"denali-box\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[8,[32,1,[\"Header\"]],[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"Header\"]],\"parameters\":[]}]]],[2,\"\\n      \"]],\"parameters\":[1]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 2:
                assert.dom('.box h3').hasText('Header', 'DenaliBox can yield a header component');

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it can yield a sub header component', /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliBox as |Box|>
                        <Box.SubHeader>Sub Header</Box.SubHeader>
                      </DenaliBox>
                    
                */
                {"id":"N//tUb4o","block":"{\"symbols\":[\"Box\"],\"statements\":[[2,\"\\n      \"],[8,\"denali-box\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[8,[32,1,[\"SubHeader\"]],[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"Sub Header\"]],\"parameters\":[]}]]],[2,\"\\n      \"]],\"parameters\":[1]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 2:
                assert.dom('.box h5').hasText('Sub Header', 'DenaliBox can yield a sub header component');

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it can yield a footer component', /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(assert) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliBox as |Box|>
                        <Box.Footer>Footer</Box.Footer>
                      </DenaliBox>
                    
                */
                {"id":"pVkAV/ty","block":"{\"symbols\":[\"Box\"],\"statements\":[[2,\"\\n      \"],[8,\"denali-box\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[8,[32,1,[\"Footer\"]],[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"Footer\"]],\"parameters\":[]}]]],[2,\"\\n      \"]],\"parameters\":[1]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 2:
                assert.dom('.box footer').hasText('Footer', 'DenaliBox can yield a footer component');

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function (_x4) {
        return _ref5.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/integration/components/denali-breadcrumb-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | denali-breadcrumb', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                assert.expect(3);
                this.set('items', [1, 2, 3, 4]);
                _context.next = 4;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliBreadcrumb
                        @items={{this.items}}
                        as | item |
                      >
                        <span class="link">{{item}}</span>
                      </DenaliBreadcrumb>
                    
                */
                {"id":"3HL0u0eW","block":"{\"symbols\":[\"item\"],\"statements\":[[2,\"\\n      \"],[8,\"denali-breadcrumb\",[],[[\"@items\"],[[32,0,[\"items\"]]]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[10,\"span\"],[14,0,\"link\"],[12],[1,[32,1]],[13],[2,\"\\n      \"]],\"parameters\":[1]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 4:
                assert.dom('ul.breadcrumb').exists('A ul with class breadcrumb is rendered');
                assert.dom('.breadcrumb li').exists({
                  count: this.items.length
                }, 'The number of li rendered equal the number of items passed through');
                assert.dom('.breadcrumb .link').exists({
                  count: this.items.length
                }, 'Each item is wrapped in a span as specified');

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/integration/components/denali-button-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | denali-button', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliButton>
                        Inner Content
                      </DenaliButton>
                    
                */
                {"id":"xd6Hx24Z","block":"{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"denali-button\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        Inner Content\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 2:
                assert.dom('button.button').hasText('Inner Content', 'DenaliButton exists and renders inner content');

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it can be disabled', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliButton disabled={{this.isDisabled}}>
                        Inner Content
                      </DenaliButton>
                    
                */
                {"id":"OKIMv9gq","block":"{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"denali-button\",[[16,\"disabled\",[32,0,[\"isDisabled\"]]]],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        Inner Content\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 2:
                assert.dom('.button').isNotDisabled('DenaliButton is not disabled by default');
                this.set('isDisabled', true);
                assert.dom('.button').isDisabled('DenaliButton can be disabled by setting the `disabled` attribute to true');

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it supports types', /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliButton @type={{this.type}}>
                        Inner Content
                      </DenaliButton>
                    
                */
                {"id":"Ha06y1Ki","block":"{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"denali-button\",[],[[\"@type\"],[[32,0,[\"type\"]]]],[[\"default\"],[{\"statements\":[[2,\"\\n        Inner Content\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 2:
                assert.dom('.button').hasAttribute('type', 'button', 'DenaliButton has a type of `button` by default');
                this.set('type', 'submit');
                assert.dom('.button').hasAttribute('type', 'submit', 'DenaliButton has a submit type when `type` arg is set to submit');

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it an be set active ', /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(assert) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliButton @isActive={{this.isActive}}>
                        Inner Content
                      </DenaliButton>
                    
                */
                {"id":"HB01QO30","block":"{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"denali-button\",[],[[\"@isActive\"],[[32,0,[\"isActive\"]]]],[[\"default\"],[{\"statements\":[[2,\"\\n        Inner Content\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 2:
                assert.dom('.button').doesNotHaveClass('is-active', 'DenaliButton is not active by default');
                this.set('isActive', true);
                assert.dom('.button').hasClass('is-active', 'DenaliButton can be set active by setting the `@isActive` arg to true');

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function (_x4) {
        return _ref5.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it supports styles', /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(assert) {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliButton @style={{this.style}}>
                        Inner Content
                      </DenaliButton>
                    
                */
                {"id":"lEHxQOpc","block":"{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"denali-button\",[],[[\"@style\"],[[32,0,[\"style\"]]]],[[\"default\"],[{\"statements\":[[2,\"\\n        Inner Content\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 2:
                assert.dom('.button').hasClass('is-solid', 'DenaliButton has a solid style by default');
                this.set('style', 'solid');
                assert.dom('.button').hasClass('is-solid', 'DenaliButton has a solid style when `@style` arg is set to solid');
                this.set('style', 'outline');
                assert.dom('.button').hasClass('is-outline', 'DenaliButton has a outline style when `@style` arg is set to outline');
                this.set('style', 'ghost');
                assert.dom('.button').hasClass('is-ghost', 'DenaliButton has a ghost style when `@style` arg is set to ghost');
                this.set('style', 'text');
                assert.dom('.button').hasClass('is-text', 'DenaliButton has a text style when `@style` arg is set to text');
                this.set('style', 'danger');
                assert.dom('.button').hasClass('is-danger', 'DenaliButton has a danger style when `@style` arg is set to danger');

              case 13:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      return function (_x5) {
        return _ref6.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it supports inverse colors', /*#__PURE__*/function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(assert) {
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliButton @isInverse={{this.isInverse}}>
                        Inner Content
                      </DenaliButton>
                    
                */
                {"id":"Xkz4WZoN","block":"{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"denali-button\",[],[[\"@isInverse\"],[[32,0,[\"isInverse\"]]]],[[\"default\"],[{\"statements\":[[2,\"\\n        Inner Content\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 2:
                assert.dom('.button').doesNotHaveClass('is-inverse', 'DenaliButton does not have inverse styling by default');
                this.set('isInverse', 'true');
                assert.dom('.button').hasClass('is-inverse', 'DenaliButton has inverse styling when `@isInverse` arg is set to true');

              case 5:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      return function (_x6) {
        return _ref7.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it supports sizes', /*#__PURE__*/function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(assert) {
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliButton @size={{this.size}}>
                        Inner Content
                      </DenaliButton>
                    
                */
                {"id":"4vSzUiTr","block":"{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"denali-button\",[],[[\"@size\"],[[32,0,[\"size\"]]]],[[\"default\"],[{\"statements\":[[2,\"\\n        Inner Content\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 2:
                assert.dom('.button').exists('DenaliButton can render without a size set');
                this.set('size', 'small');
                assert.dom('.button').hasClass('is-small', 'DenaliButton has a small size when `@size` arg is set to small');
                this.set('size', 'medium');
                assert.dom('.button').hasClass('is-medium', 'DenaliButton has a medium size when `@size` arg is set to medium');
                this.set('size', 'large');
                assert.dom('.button').hasClass('is-large', 'DenaliButton has a large size when `@size` arg is set to large');

              case 9:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      return function (_x7) {
        return _ref8.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it supports isFull', /*#__PURE__*/function () {
      var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(assert) {
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliButton @size={{this.size}} @isFull={{this.isFull}}>
                        Inner Content
                      </DenaliButton>
                    
                */
                {"id":"U5fEVQcW","block":"{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"denali-button\",[],[[\"@size\",\"@isFull\"],[[32,0,[\"size\"]],[32,0,[\"isFull\"]]]],[[\"default\"],[{\"statements\":[[2,\"\\n        Inner Content\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 2:
                assert.dom('.button').exists('DenaliButton can render without a size set');
                assert.dom('.button').doesNotHaveClass('is-full', 'DenaliButton does not have a full size when `@isFull` arg is undefined');
                this.set('isFull', true);
                assert.dom('.button').hasClass('is-full', 'DenaliButton has a full size when `@isFull` arg is set to true');
                this.set('size', 'small');
                assert.dom('.button').hasClass('is-small', 'DenaliButton has a small size when `@size` arg is set to small');
                assert.dom('.button').hasClass('is-full', 'DenaliButton has a full size when `@isFull` arg is set to true and size is set to small');
                this.set('isFull', false);
                assert.dom('.button').hasClass('is-small', 'DenaliButton has a small size when `@size` arg is set to small');
                assert.dom('.button').doesNotHaveClass('is-full', 'DenaliButton does not have a full size when `@isFull` arg is set to false');

              case 12:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      return function (_x8) {
        return _ref9.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it supports icons', /*#__PURE__*/function () {
      var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(assert) {
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliButton @style="solid" @icon={{this.icon}} @iconOnly={{this.iconOnly}}>
                        Share
                      </DenaliButton>
                    
                */
                {"id":"o6tQKES1","block":"{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"denali-button\",[],[[\"@style\",\"@icon\",\"@iconOnly\"],[\"solid\",[32,0,[\"icon\"]],[32,0,[\"iconOnly\"]]]],[[\"default\"],[{\"statements\":[[2,\"\\n        Share\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 2:
                assert.dom('.button .d-icon').doesNotExist('No icon is rendered when none is specified');
                assert.dom('.button').doesNotHaveClass('has-icon', 'DenaliButton does not have a `has-icon` class by default');
                this.set('icon', 'share');
                assert.dom('.button .d-icon').exists('DenaliButton renders an icon when specified');
                assert.dom('.button .d-icon').hasClass('d-share', 'DenaliButton renders the specified icon');
                assert.dom('.button').doesNotHaveClass('has-icon', 'DenaliButton does not have a `has-icon` class');
                this.set('iconOnly', true);
                assert.dom('.button').hasClass('has-icon', 'DenaliButton has a `has-icon` class when iconOnly arg is set to true');

              case 10:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      return function (_x9) {
        return _ref10.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it supports loading', /*#__PURE__*/function () {
      var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(assert) {
        return regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliButton 
                        @isLoading={{this.isLoading}} 
                        @icon="save"
                      >
                        Save
                      </DenaliButton>
                    
                */
                {"id":"Ad5YAKd3","block":"{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"denali-button\",[],[[\"@isLoading\",\"@icon\"],[[32,0,[\"isLoading\"]],\"save\"]],[[\"default\"],[{\"statements\":[[2,\"\\n        Save\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 2:
                assert.dom('.button').doesNotHaveClass('has-loader', 'DenaliButton does not have a `has-loader` class by default');
                assert.dom('.button').hasText('Save', 'DenaliButton renders inner text by default');
                assert.dom('.button .d-icon').exists('DenaliButton renders an icon when specified');
                assert.dom('.button div.loader').doesNotExist('DenaliButton does render a loader by default');
                this.set('isLoading', true);
                assert.dom('.button').hasClass('has-loader', 'DenaliButton has `has-loader` class when `@isLoading` arg is true');
                assert.dom('.button').hasNoText('DenaliButton does not render inner text when `@isLoading` arg is true');
                assert.dom('.button .d-icon').doesNotExist('DenaliButton does not render an icon when `@isLoading` arg is true');
                assert.dom('.button div.loader').exists('DenaliButton renders a loader when `@isLoading` arg is true');
                assert.dom('.button div.loader--button').exists('DenaliButton renders a loader--button when `@isLoading` arg is true');

              case 12:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      return function (_x10) {
        return _ref11.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/integration/components/denali-checkbox-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | denali-checkbox', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                assert.expect(7);
                _context.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliCheckbox
                        checked={{this.checked}}
                        disabled={{this.disabled}}
                        data-partial={{this.partialData}}
                      >
                        Test
                      </DenaliCheckbox>
                    
                */
                {"id":"iOjtCbvs","block":"{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"denali-checkbox\",[[16,\"checked\",[32,0,[\"checked\"]]],[16,\"disabled\",[32,0,[\"disabled\"]]],[16,\"data-partial\",[32,0,[\"partialData\"]]]],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        Test\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 3:
                assert.dom('.denali-checkbox').hasText('Test', 'A denali checkbox is rendered with the specified text');
                assert.dom('.denali-checkbox input').isNotDisabled('The checkbox is not disabled by default');
                assert.dom('.denali-checkbox input').isNotChecked('The checkbox is not checked by default');
                assert.dom('.denali-checkbox input').doesNotHaveAttribute('data-partial', 'The checkbox does not have the data-partial attribute set by default');
                this.set('partialData', true);
                assert.dom('.denali-checkbox input').hasAttribute('data-partial', '', 'The checkbox has the data-partial attribute when set to true');
                this.set('checked', true);
                assert.dom('.denali-checkbox input').isChecked('The checkbox is checked when the checked attribute is set to true');
                this.set('disabled', true);
                assert.dom('.denali-checkbox input').isDisabled('The checkbox is disabled when the disabled attribute is set to true');

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('action', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                assert.expect(4);
                this.set('clickHandler', function () {
                  assert.ok('The click handler is called when checkbox is clicked');
                });
                _context2.next = 4;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliCheckbox
                        {{on 'click' (action this.clickHandler)}}
                      >
                        Test
                      </DenaliCheckbox>
                    
                */
                {"id":"vYc5Nuh3","block":"{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"denali-checkbox\",[[4,[38,1],[\"click\",[30,[36,0],[[32,0],[32,0,[\"clickHandler\"]]],null]],null]],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        Test\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[\"action\",\"on\"]}","moduleName":"(unknown template module)"}));

              case 4:
                _context2.next = 6;
                return (0, _testHelpers.click)('.denali-checkbox input');

              case 6:
                assert.dom('.denali-checkbox input').isChecked('The checkbox is checked when clicked on');
                _context2.next = 9;
                return (0, _testHelpers.click)('.denali-checkbox label');

              case 9:
                assert.dom('.denali-checkbox input').isNotChecked('The checkbox is unchecked when clicked again');

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/integration/components/denali-chip-group-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | denali-chip-group', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliChipGroup as | Group |>
                        <Group.Chip>Grouped</Group.Chip> <Group.Chip>Chips</Group.Chip>
                      </DenaliChipGroup>
                    
                */
                {"id":"dB2a1IPC","block":"{\"symbols\":[\"Group\"],\"statements\":[[2,\"\\n      \"],[8,\"denali-chip-group\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[8,[32,1,[\"Chip\"]],[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"Grouped\"]],\"parameters\":[]}]]],[2,\" \"],[8,[32,1,[\"Chip\"]],[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"Chips\"]],\"parameters\":[]}]]],[2,\"\\n      \"]],\"parameters\":[1]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 2:
                assert.dom('span.chip-group span.chips').exists({
                  count: 2
                }, 'Chips are rendered inside group');
                assert.dom('span.chip-group').hasText('Grouped Chips', 'Group has correct text');

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/integration/components/denali-chip-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | denali-chip', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliChip>
                        Chip Text
                      </DenaliChip>
                    
                */
                {"id":"a68zmJM/","block":"{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"denali-chip\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        Chip Text\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 2:
                assert.dom('span.chips').exists({
                  count: 1
                }, 'A chip is rendered');
                assert.dom('span.chips').hasText('Chip Text', 'Chip has yielded text');

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it supports sizes', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliChip @size={{this.size}}>
                        Inner Content
                      </DenaliChip>
                    
                */
                {"id":"s87uDUUV","block":"{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"denali-chip\",[],[[\"@size\"],[[32,0,[\"size\"]]]],[[\"default\"],[{\"statements\":[[2,\"\\n        Inner Content\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 2:
                assert.dom('.chips').exists({
                  count: 1
                }, 'DenaliChip can render without a size set');
                assert.dom('.chips').lacksClass(/is-[^\s]*/, 'Ensure that when no size class is not rendered');
                this.set('size', 'small');
                assert.dom('.chips').hasClass('is-small', 'DenaliChip has a small size when `@size` arg is set to small');

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it supports color', /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliChip @textColor={{this.textColor}} @textShade={{this.textShade}} @backgroundColor={{this.backgroundColor}} @backgroundShade={{this.backgroundShade}}>
                        Inner Content
                      </DenaliChip>
                    
                */
                {"id":"23E8Vq3k","block":"{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"denali-chip\",[],[[\"@textColor\",\"@textShade\",\"@backgroundColor\",\"@backgroundShade\"],[[32,0,[\"textColor\"]],[32,0,[\"textShade\"]],[32,0,[\"backgroundColor\"]],[32,0,[\"backgroundShade\"]]]],[[\"default\"],[{\"statements\":[[2,\"\\n        Inner Content\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 2:
                assert.dom('.chips').exists({
                  count: 1
                }, 'DenaliChip can render without set colors');
                assert.dom('.chips').lacksClass(/is-[^\s]*-[^\s]*/, 'Ensure that when no textColor class is not rendered');
                assert.dom('.chips').lacksClass(/has-bg-[^\s]*-[^\s]*/, 'Ensure that when no backgroundColor class is not rendered');
                this.set('textShade', '300');
                assert.dom('.chips').lacksClass(/is-[^\s]*-300/, 'Ensure that when no textColor class is not rendered with shade');
                this.set('backgroundShade', '300');
                assert.dom('.chips').lacksClass(/has-bg-[^\s]*-300/, 'Ensure that when no backgroundColor class is not rendered with shade');
                this.set('textShade', undefined);
                this.set('backgroundShade', undefined);
                this.set('textColor', 'green');
                assert.dom('.chips').hasClass('is-green-500', 'with text color class is attached and shade is default 500');
                this.set('backgroundColor', 'orange');
                assert.dom('.chips').hasClass('has-bg-orange-500', 'with bg color class is attached and shade is default 500');
                this.set('textShade', '200');
                assert.dom('.chips').hasClass('is-green-200', 'with text shade class is attached and shade is updated');
                this.set('backgroundShade', '100');
                assert.dom('.chips').hasClass('has-bg-orange-100', 'with bg shade class is attached and shade is updated');

              case 19:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/integration/components/denali-icon-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | denali-icon', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.set('icon', 'code');
                _context.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliIcon
                        @icon={{this.icon}}
                      />
                    
                */
                {"id":"qGqYz1B7","block":"{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"denali-icon\",[],[[\"@icon\"],[[32,0,[\"icon\"]]]],null],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 3:
                assert.dom('i.d-icon.d-code').exists('DenaliIcon exists and has the correct icon class');
                this.set('icon', 'bug');
                assert.dom('i.d-icon.d-bug').exists('DenaliIcon exists and has the correct icon class');

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it supports sizes', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliIcon
                        @icon="code"
                        @size={{this.size}}
                      >
                        Link Text
                      </DenaliIcon>
                    
                */
                {"id":"7/F8RvT+","block":"{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"denali-icon\",[],[[\"@icon\",\"@size\"],[\"code\",[32,0,[\"size\"]]]],[[\"default\"],[{\"statements\":[[2,\"\\n        Link Text\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 2:
                this.set('size', 'extrasmall');
                assert.dom('.d-icon').hasClass('is-extrasmall', 'DenaliIcon has a small size when `@size` arg is set to extrasmall');
                this.set('size', 'small');
                assert.dom('.d-icon').hasClass('is-small', 'DenaliIcon has a small size when `@size` arg is set to small');
                this.set('size', 'medium');
                assert.dom('.d-icon').hasClass('is-medium', 'DenaliIcon has a medium size when `@size` arg is set to medium');
                this.set('size', 'large');
                assert.dom('.d-icon').hasClass('is-large', 'DenaliIcon has a large size when `@size` arg is set to large');

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/integration/components/denali-input-group-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | denali-input-group', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                assert.expect(1);
                _context.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <DenaliInputGroup />
                */
                {"id":"pJ5O4rtx","block":"{\"symbols\":[],\"statements\":[[8,\"denali-input-group\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 3:
                assert.dom('div.input-group').exists('An input group is rendered');

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it renders a label', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                assert.expect(1);
                _context2.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <DenaliInputGroup @label={{this.label}}/>
                */
                {"id":"Aynt0klQ","block":"{\"symbols\":[],\"statements\":[[8,\"denali-input-group\",[],[[\"@label\"],[[32,0,[\"label\"]]]],null]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 3:
                this.set('label', 'My Label');
                assert.dom('div.input-group label').hasTextContaining('My Label', 'An input group is rendered with a label');

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it yields', /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                assert.expect(1);
                _context3.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliInputGroup @label="My Label">
                        <DenaliInput type="text" placeholder="Text Field" />
                      </DenaliInputGroup>
                    
                */
                {"id":"OXB5M/9x","block":"{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"denali-input-group\",[],[[\"@label\"],[\"My Label\"]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[8,\"denali-input\",[[24,\"placeholder\",\"Text Field\"],[24,4,\"text\"]],[[],[]],null],[2,\"\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 3:
                assert.dom('div.input-group div.input input').exists('`DenaliInputGroup` yields inner content');

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it renders stacked', /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(assert) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                assert.expect(1);
                _context4.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliInputGroup @label="My Label" @isStacked={{true}}>
                        <DenaliCheckbox>
                          Test
                        </DenaliCheckbox>
                      </DenaliInputGroup>
                    
                */
                {"id":"GXccPMxd","block":"{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"denali-input-group\",[],[[\"@label\",\"@isStacked\"],[\"My Label\",true]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[8,\"denali-checkbox\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n          Test\\n        \"]],\"parameters\":[]}]]],[2,\"\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 3:
                assert.dom('div.is-stacked').exists('An input group is rendered stacked');

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function (_x4) {
        return _ref5.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it renders responsively', /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(assert) {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                assert.expect(1);
                _context5.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliInputGroup @label="My Label" @isResponsive={{true}}>
                        <DenaliInput type="text" placeholder="Text Field" />
                      </DenaliInputGroup>
                    
                */
                {"id":"k4HPWXnX","block":"{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"denali-input-group\",[],[[\"@label\",\"@isResponsive\"],[\"My Label\",true]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[8,\"denali-input\",[[24,\"placeholder\",\"Text Field\"],[24,4,\"text\"]],[[],[]],null],[2,\"\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 3:
                assert.dom('div.responsive').exists('An input group is rendered responsively');

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      return function (_x5) {
        return _ref6.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it adjusts the label width automatically', /*#__PURE__*/function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(assert) {
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                assert.expect(1);
                _context6.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliInputGroup @label="My Label" @hasAutoWidth={{true}}>
                        <DenaliInput type="text" placeholder="Text Field" />
                      </DenaliInputGroup>
                    
                */
                {"id":"RYLaOhWy","block":"{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"denali-input-group\",[],[[\"@label\",\"@hasAutoWidth\"],[\"My Label\",true]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[8,\"denali-input\",[[24,\"placeholder\",\"Text Field\"],[24,4,\"text\"]],[[],[]],null],[2,\"\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 3:
                assert.dom('div.auto').exists('An input group is rendered with label width adjusted automatically');

              case 4:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      return function (_x6) {
        return _ref7.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/integration/components/denali-input-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | denali-input', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <DenaliInput value="My Input" />
                */
                {"id":"1XoQ68AU","block":"{\"symbols\":[],\"statements\":[[8,\"denali-input\",[[24,2,\"My Input\"]],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 2:
                assert.dom('.input input').exists('An input is rendered within a wrapper div with class `.input`');
                assert.dom('.input input').isNotDisabled('The input is not disabled by default');
                assert.dom('.input input').hasValue('My Input', 'The input has the specified value');

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('input types', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <DenaliInput type={{this.type}}/>
                */
                {"id":"0B2HSxC+","block":"{\"symbols\":[],\"statements\":[[8,\"denali-input\",[[16,4,[32,0,[\"type\"]]]],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 2:
                this.set('type', 'text');
                assert.dom('.input input').hasAttribute('type', 'text', 'The input has the default type attribute text');
                this.set('type', 'email');
                assert.dom('.input input').hasAttribute('type', 'email', 'The input type attribute has the value email');
                this.set('type', 'password');
                assert.dom('.input input').hasAttribute('type', 'password', 'The input type attribute has the value password');
                this.set('type', 'number');
                assert.dom('.input input').hasAttribute('type', 'number', 'The input type attribute has the value number');

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('input size', /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <DenaliInput @size={{this.size}} />
                */
                {"id":"cjUixw4M","block":"{\"symbols\":[],\"statements\":[[8,\"denali-input\",[],[[\"@size\"],[[32,0,[\"size\"]]]],null]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 2:
                this.set('size', 'small');
                assert.dom('.input').hasClass('is-small', 'The input wrapper has the appropriate class for small');
                this.set('size', 'medium');
                assert.dom('.input').hasClass('is-medium', 'The input wrapper has the appropriate class for medium');

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('states', /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(assert) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <DenaliInput @state={{this.state}} />
                */
                {"id":"x0EpaVqA","block":"{\"symbols\":[],\"statements\":[[8,\"denali-input\",[],[[\"@state\"],[[32,0,[\"state\"]]]],null]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 2:
                this.set('state', 'active');
                assert.dom('.input').hasClass('is-active', 'The input wrapper has the appropriate class for active');
                this.set('state', 'error');
                assert.dom('.input').hasClass('is-error', 'The input wrapper has the appropriate class for error');

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function (_x4) {
        return _ref5.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('disabled', /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(assert) {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <DenaliInput disabled={{true}}/>
                */
                {"id":"v+UN4WRv","block":"{\"symbols\":[],\"statements\":[[8,\"denali-input\",[[16,\"disabled\",true]],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 2:
                assert.dom('.input input').isDisabled('The input is disabled when specified');

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      return function (_x5) {
        return _ref6.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('placeholder', /*#__PURE__*/function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(assert) {
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <DenaliInput type="email" placeholder="Email field"/>
                */
                {"id":"0IWBOoMA","block":"{\"symbols\":[],\"statements\":[[8,\"denali-input\",[[24,\"placeholder\",\"Email field\"],[24,4,\"email\"]],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 2:
                assert.dom('.input input').hasAttribute('placeholder', 'Email field', 'The input is has the specified placeholder');

              case 3:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      return function (_x6) {
        return _ref7.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('is inverse', /*#__PURE__*/function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(assert) {
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <DenaliInput @isInverse={{this.isInverse}} />
                */
                {"id":"/hw2wTj2","block":"{\"symbols\":[],\"statements\":[[8,\"denali-input\",[],[[\"@isInverse\"],[[32,0,[\"isInverse\"]]]],null]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 2:
                assert.dom('.input').doesNotHaveClass('is-inverse', 'The input wrapper by default does not have the inverse class');
                this.set('isInverse', 'true');
                assert.dom('.input').hasClass('is-inverse', 'The input wrapper has the inverse class when specified');

              case 5:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      return function (_x7) {
        return _ref8.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('error message', /*#__PURE__*/function () {
      var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(assert) {
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <DenaliInput @state="error" @errorMsg={{this.errorMsg}} />
                */
                {"id":"3HcDeBm6","block":"{\"symbols\":[],\"statements\":[[8,\"denali-input\",[],[[\"@state\",\"@errorMsg\"],[\"error\",[32,0,[\"errorMsg\"]]]],null]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 2:
                assert.dom('.input.is-error .message').doesNotExist();
                this.set('errorMsg', 'Email Invalid');
                assert.dom('.input.is-error .message').hasText('Email Invalid', 'The specified error message is rendered');

              case 5:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      return function (_x8) {
        return _ref9.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('icons', /*#__PURE__*/function () {
      var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(assert) {
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliInput
                        @iconFront={{this.iconFront}}
                        @iconFrontClass="front-icon"
                        @iconBack={{this.iconBack}}
                        @iconBackClass="back-icon"
                      />
                    
                */
                {"id":"P3OIAm0Y","block":"{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"denali-input\",[],[[\"@iconFront\",\"@iconFrontClass\",\"@iconBack\",\"@iconBackClass\"],[[32,0,[\"iconFront\"]],\"front-icon\",[32,0,[\"iconBack\"]],\"back-icon\"]],null],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 2:
                assert.dom('.input.has-icon-front').doesNotExist('The icon-front class is not applied to the input when no front icon is specified');
                assert.dom('.input.has-icon-back').doesNotExist('The icon-back class is not applied to the input when no back icon is specified');
                this.set('iconFront', 'share');
                assert.dom('.input.has-icon-front').exists('The icon-front class is applied to the input when front icon is specified');
                assert.dom('.input.has-icon-front .front-icon').hasClass('d-share', 'The correct denali icon is rendered as the front icon');
                this.set('iconBack', 'close-circle-solid');
                assert.dom('.input.has-icon-back').exists('The icon-back class is applied to the input when back icon is specified');
                assert.dom('.input.has-icon-back .back-icon').hasClass('d-close-circle-solid', 'The correct denali icon is rendered as the back icon');

              case 10:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      return function (_x9) {
        return _ref10.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('wrapperClass', /*#__PURE__*/function () {
      var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(assert) {
        var wrapperClass;
        return regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliInput
                        @wrapperClass={{this.wrapperClass}}
                      />
                    
                */
                {"id":"879F1h0p","block":"{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"denali-input\",[],[[\"@wrapperClass\"],[[32,0,[\"wrapperClass\"]]]],null],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 2:
                wrapperClass = 'wrapperClass';
                assert.dom('.input').doesNotHaveClass(wrapperClass, '`DenaliInput` does not have custom wrapper class by default');
                this.set('wrapperClass', wrapperClass);
                assert.dom('.input').hasClass(wrapperClass, '`DenaliInput` has custom specified wrapper class');

              case 6:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      return function (_x10) {
        return _ref11.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('actions', /*#__PURE__*/function () {
      var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(assert) {
        return regeneratorRuntime.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                assert.expect(2);
                this.set('handleInput', function (event) {
                  assert.equal(event.target.value, 'Random Text', 'the action passed in configured correctly');
                });
                _context11.next = 4;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <DenaliInput
                      {{on 'input' (action this.handleInput)}}
                    />
                */
                {"id":"HfxY+jvx","block":"{\"symbols\":[],\"statements\":[[8,\"denali-input\",[[4,[38,1],[\"input\",[30,[36,0],[[32,0],[32,0,[\"handleInput\"]]],null]],null]],[[],[]],null]],\"hasEval\":false,\"upvars\":[\"action\",\"on\"]}","moduleName":"(unknown template module)"}));

              case 4:
                _context11.next = 6;
                return (0, _testHelpers.fillIn)('.input input', 'Random Text');

              case 6:
                this.set('handleInput', function (event) {
                  assert.equal(event.target.value, 'More Random Text', 'the action is configured correctly');
                });
                this.element.querySelector('.input input').value = 'More Random Text';
                this.element.querySelector('.input input').dispatchEvent(new Event('input'));

              case 9:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      return function (_x11) {
        return _ref12.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/integration/components/denali-link-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | denali-link', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliLink
                        href="https://denali.design/"
                        target="_blank"
                        @size={{this.size}}
                      >
                        Link Text
                      </DenaliLink>
                    
                */
                {"id":"kgkZv7XH","block":"{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"denali-link\",[[24,6,\"https://denali.design/\"],[24,\"target\",\"_blank\"]],[[\"@size\"],[[32,0,[\"size\"]]]],[[\"default\"],[{\"statements\":[[2,\"\\n        Link Text\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 2:
                assert.dom('a.denali-link').hasText('Link Text', 'DenaliLink renders an anchor element');
                assert.dom('a.denali-link').hasAttribute('href', 'https://denali.design/', 'DenaliLink has the specified href');
                assert.dom('a.denali-link').hasAttribute('target', '_blank', 'DenaliLink has the specified target');
                assert.dom('a.denali-link').doesNotHaveClass('is-small', 'DenaliLink does not have the is-small class by default');
                this.set('size', 'small');
                assert.dom('a.denali-link').hasClass('is-small', 'DenaliLink has the is-small class when the size is set to small');

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('secondary and sub links', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliLink
                        @isSub={{this.sub}}
                        @isSecondary={{this.secondary}}
                      >
                        Link Text
                      </DenaliLink>
                */
                {"id":"zS83u3UU","block":"{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"denali-link\",[],[[\"@isSub\",\"@isSecondary\"],[[32,0,[\"sub\"]],[32,0,[\"secondary\"]]]],[[\"default\"],[{\"statements\":[[2,\"\\n        Link Text\\n      \"]],\"parameters\":[]}]]]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 2:
                assert.dom('a.denali-link').doesNotHaveClass('is-sub', 'DenaliLink by default is not a sub link');
                assert.dom('a.denali-link').doesNotHaveClass('is-secondary', 'DenaliLink by default is not a secondary link');
                this.set('sub', true);
                assert.dom('a.denali-link').hasClass('is-sub', 'DenaliLink is a sub link when isSub arg is set to true');
                this.set('secondary', true);
                assert.dom('a.denali-link').hasClass('is-sub', 'DenaliLink retains the is-sub class');
                assert.dom('a.denali-link').hasClass('is-secondary', 'DenaliLink is a secondary link when secondary arg is set to true');

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('states', /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliLink
                        @state={{this.state}}
                      >
                        Link Text
                      </DenaliLink>
                    
                */
                {"id":"Lxz23q/u","block":"{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"denali-link\",[],[[\"@state\"],[[32,0,[\"state\"]]]],[[\"default\"],[{\"statements\":[[2,\"\\n        Link Text\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 2:
                assert.dom('a.denali-link').doesNotHaveClass('is-active', 'DenaliLink by default is not active');
                assert.dom('a.denali-link').doesNotHaveClass('is-disabled', 'DenaliLink by default is not disabled');
                this.set('state', 'active');
                assert.dom('a.denali-link').hasClass('is-active', 'DenaliLink is active when state is set to active');
                this.set('state', 'disabled');
                assert.dom('a.denali-link').hasClass('is-disabled', 'DenaliLink is disabled when state is set to disabled');

              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('icons', /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(assert) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliLink
                        @iconFront={{this.iconFront}}
                        @iconFrontClass={{this.iconFrontClass}}
                        @iconBack={{this.iconBack}}
                        @iconBackClass={{this.iconBackClass}}
                      >
                        Link Text
                      </DenaliLink>
                    
                */
                {"id":"DQL/PzJI","block":"{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"denali-link\",[],[[\"@iconFront\",\"@iconFrontClass\",\"@iconBack\",\"@iconBackClass\"],[[32,0,[\"iconFront\"]],[32,0,[\"iconFrontClass\"]],[32,0,[\"iconBack\"]],[32,0,[\"iconBackClass\"]]]],[[\"default\"],[{\"statements\":[[2,\"\\n        Link Text\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 2:
                assert.dom('a.denali-link').doesNotHaveClass('has-icon-front', 'DenaliLink does not have the `has-icon-front` class by default');
                assert.dom('a.denali-link').doesNotHaveClass('has-icon-back', 'DenaliLink does not have the `has-icon-back` class by default');
                this.set('iconFront', 'add-circle');
                this.set('iconFrontClass', 'link-icon-front');
                assert.dom('a.denali-link').hasClass('has-icon-front', 'DenaliLink has the `has-icon-front` class when iconFront is specified');
                assert.dom('a.denali-link .d-icon.link-icon-front').hasClass('d-add-circle', 'DenaliLink has the specified icon in the front');
                this.set('iconBack', 'external');
                this.set('iconBackClass', 'link-icon-back');
                assert.dom('a.denali-link').hasClass('has-icon-back', 'DenaliLink has the `has-icon-back` class when iconBack is specified');
                assert.dom('a.denali-link .d-icon.link-icon-back').hasClass('d-external', 'DenaliLink has the specified icon in the back');

              case 12:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function (_x4) {
        return _ref5.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/integration/components/denali-link-to-test", ["qunit", "ember-qunit", "@ember/test-helpers", "dummy/tests/helpers/setup-router"], function (_qunit, _emberQunit, _testHelpers, _setupRouter) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | denali-link-to', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _setupRouter.default)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliLinkTo @route="index" @query={{hash user="jkusa"}}>
                        Link Text
                      </DenaliLinkTo>
                    
                */
                {"id":"4XVWRCIr","block":"{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"denali-link-to\",[],[[\"@route\",\"@query\"],[\"index\",[30,[36,0],null,[[\"user\"],[\"jkusa\"]]]]],[[\"default\"],[{\"statements\":[[2,\"\\n        Link Text\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[\"hash\"]}","moduleName":"(unknown template module)"}));

              case 2:
                assert.dom('a.ember-view').hasText('Link Text', 'DenaliLinkTo exists and renders inner content');
                assert.dom('a.denali-link').hasAttribute('href', '/?user=jkusa', 'DenaliLinkTo renders an href based on a route & query');

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it is set as active when on current route', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.set('route', 'four-oh-four');
                _context2.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliLinkTo @route={{this.route}}>
                        Link Text
                      </DenaliLinkTo>
                    
                */
                {"id":"iCFFZkJI","block":"{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"denali-link-to\",[],[[\"@route\"],[[32,0,[\"route\"]]]],[[\"default\"],[{\"statements\":[[2,\"\\n        Link Text\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 3:
                assert.dom('a.denali-link').doesNotHaveClass('is-active', 'DenaliLinkTo is not active when not on the current route');
                this.set('route', 'index');
                assert.dom('a.denali-link').hasClass('is-active', 'DenaliLinkTo is active when on the current route');

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('size', /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliLinkTo
                        @route="four-oh-four"
                        @size={{this.size}}
                      >
                        Link Text
                      </DenaliLinkTo>
                    
                */
                {"id":"orqDktOr","block":"{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"denali-link-to\",[],[[\"@route\",\"@size\"],[\"four-oh-four\",[32,0,[\"size\"]]]],[[\"default\"],[{\"statements\":[[2,\"\\n        Link Text\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 2:
                assert.dom('a.denali-link').doesNotHaveClass('is-small', 'DenaliLinkTo does not have the is-small class by default');
                this.set('size', 'small');
                assert.dom('a.denali-link').hasClass('is-small', 'DenaliLinkTo has the is-small class when the size is set to small');

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('secondary and sub links', /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(assert) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliLinkTo
                        @route="four-oh-four"
                        @isSub={{this.sub}}
                        @isSecondary={{this.secondary}}
                      >
                        Link Text
                      </DenaliLinkTo>
                    
                */
                {"id":"Jyi+4nDu","block":"{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"denali-link-to\",[],[[\"@route\",\"@isSub\",\"@isSecondary\"],[\"four-oh-four\",[32,0,[\"sub\"]],[32,0,[\"secondary\"]]]],[[\"default\"],[{\"statements\":[[2,\"\\n        Link Text\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 2:
                assert.dom('a.denali-link').doesNotHaveClass('is-sub', 'DenaliLinkTo by default is not a sub link');
                assert.dom('a.denali-link').doesNotHaveClass('is-secondary', 'DenaliLinkTo by default is not a secondary link');
                this.set('sub', true);
                assert.dom('a.denali-link').hasClass('is-sub', 'DenaliLinkTo is a sub link when isSub arg is set to true');
                this.set('secondary', true);
                assert.dom('a.denali-link').hasClass('is-sub', 'DenaliLinkTo retains the is-sub class');
                assert.dom('a.denali-link').hasClass('is-secondary', 'DenaliLinkTo is a secondary link when secondary arg is set to true');

              case 9:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function (_x4) {
        return _ref5.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('state', /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(assert) {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliLinkTo
                        @route="four-oh-four"
                        @state={{this.state}}
                      >
                        Link Text
                      </DenaliLinkTo>
                    
                */
                {"id":"1yNpXFJw","block":"{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"denali-link-to\",[],[[\"@route\",\"@state\"],[\"four-oh-four\",[32,0,[\"state\"]]]],[[\"default\"],[{\"statements\":[[2,\"\\n        Link Text\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 2:
                assert.dom('a.denali-link').doesNotHaveClass('is-disabled', 'DenaliLinkTo is not disabled by default');
                this.set('state', 'disabled');
                assert.dom('a.denali-link').hasClass('is-disabled', 'DenaliLinkTo is disabled when state is set to disabled');

              case 5:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      return function (_x5) {
        return _ref6.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('disabled', /*#__PURE__*/function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(assert) {
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliLinkTo
                        @route="four-oh-four"
                        @disabled={{this.disabled}}
                      >
                        Link Text
                      </DenaliLinkTo>
                    
                */
                {"id":"+6Voa3mb","block":"{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"denali-link-to\",[],[[\"@route\",\"@disabled\"],[\"four-oh-four\",[32,0,[\"disabled\"]]]],[[\"default\"],[{\"statements\":[[2,\"\\n        Link Text\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 2:
                assert.dom('a.denali-link').doesNotHaveClass('is-disabled', 'DenaliLinkTo is not disabled by default');
                this.set('disabled', true);
                assert.dom('a.denali-link').hasClass('is-disabled', 'DenaliLinkTo is disabled when disabled is set to true');

              case 5:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      return function (_x6) {
        return _ref7.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('icons', /*#__PURE__*/function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(assert) {
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliLinkTo
                        @route="four-oh-four"
                        @iconFront={{this.iconFront}}
                        @iconFrontClass={{this.iconFrontClass}}
                        @iconBack={{this.iconBack}}
                        @iconBackClass={{this.iconBackClass}}
                      >
                        Link Text
                      </DenaliLinkTo>
                    
                */
                {"id":"RXfRyrdv","block":"{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"denali-link-to\",[],[[\"@route\",\"@iconFront\",\"@iconFrontClass\",\"@iconBack\",\"@iconBackClass\"],[\"four-oh-four\",[32,0,[\"iconFront\"]],[32,0,[\"iconFrontClass\"]],[32,0,[\"iconBack\"]],[32,0,[\"iconBackClass\"]]]],[[\"default\"],[{\"statements\":[[2,\"\\n        Link Text\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 2:
                assert.dom('a.denali-link').doesNotHaveClass('has-icon-front', 'DenaliLinkTo does not have the `has-icon-front` class by default');
                assert.dom('a.denali-link').doesNotHaveClass('has-icon-back', 'DenaliLinkTo does not have the `has-icon-back` class by default');
                this.set('iconFront', 'add-circle');
                this.set('iconFrontClass', 'link-icon-front');
                assert.dom('a.denali-link').hasClass('has-icon-front', 'DenaliLinkTo has the `has-icon-front` class when iconFront is specified');
                assert.dom('a .d-icon.link-icon-front').hasClass('d-add-circle', 'DenaliLinkTo has the specified icon in the front');
                this.set('iconBack', 'external');
                this.set('iconBackClass', 'link-icon-back');
                assert.dom('a.denali-link').hasClass('has-icon-back', 'DenaliLinkTo has the `has-icon-back` class when iconBack is specified');
                assert.dom('a .d-icon.link-icon-back').hasClass('d-external', 'DenaliLinkTo has the specified icon in the back');

              case 12:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      return function (_x7) {
        return _ref8.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/integration/components/denali-loader-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | denali-loader', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <DenaliLoader />
                */
                {"id":"fyROpEqQ","block":"{\"symbols\":[],\"statements\":[[8,\"denali-loader\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 2:
                assert.dom('div.loader').exists('DenaliLoader can render.');

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it supports sizes', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliLoader @size={{this.size}} />
                    
                */
                {"id":"7bPW89Dw","block":"{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"denali-loader\",[],[[\"@size\"],[[32,0,[\"size\"]]]],null],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 2:
                this.set('size', 'extrasmall');
                assert.dom('.loader').hasClass('is-extrasmall', 'DenaliLoader has an extrasmall size when `@size` arg is set to extrasmall');
                this.set('size', 'small');
                assert.dom('.loader').hasClass('is-small', 'DenaliLoader has a small size when `@size` arg is set to small');
                this.set('size', 'medium');
                assert.dom('.loader').hasClass('is-medium', 'DenaliLoader has a medium size when `@size` arg is set to medium');
                this.set('size', 'large');
                assert.dom('.loader').hasClass('is-large', 'DenaliLoader has a large size when `@size` arg is set to large');

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it supports inverse colors', /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliLoader @isInverse={{this.isInverse}} />
                    
                */
                {"id":"VlaaWLtq","block":"{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"denali-loader\",[],[[\"@isInverse\"],[[32,0,[\"isInverse\"]]]],null],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 2:
                assert.dom('.loader').doesNotHaveClass('is-inverse', 'DenaliLoader does not have inverse styling by default');
                this.set('isInverse', 'true');
                assert.dom('.loader').hasClass('is-inverse', 'DenaliLoader has inverse styling when `@isInverse` arg is set to true');

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/integration/components/denali-menu-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | denali-menu', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                assert.expect(4);
                _context.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliMenu class="test-menu" as |Menu|>
                        <Menu.Trigger>Hover</Menu.Trigger>
                        <Menu.Content>
                          <ul>
                            <li>One</li>
                            <li>Two</li>
                            <li>Three</li>
                          </ul>
                        </Menu.Content>
                      </DenaliMenu>
                    
                */
                {"id":"tP2jjX3V","block":"{\"symbols\":[\"Menu\"],\"statements\":[[2,\"\\n      \"],[8,\"denali-menu\",[[24,0,\"test-menu\"]],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[8,[32,1,[\"Trigger\"]],[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"Hover\"]],\"parameters\":[]}]]],[2,\"\\n        \"],[8,[32,1,[\"Content\"]],[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n          \"],[10,\"ul\"],[12],[2,\"\\n            \"],[10,\"li\"],[12],[2,\"One\"],[13],[2,\"\\n            \"],[10,\"li\"],[12],[2,\"Two\"],[13],[2,\"\\n            \"],[10,\"li\"],[12],[2,\"Three\"],[13],[2,\"\\n          \"],[13],[2,\"\\n        \"]],\"parameters\":[]}]]],[2,\"\\n      \"]],\"parameters\":[1]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 3:
                assert.dom('.test-menu').exists('The test menu is rendered');
                assert.dom('.test-menu .menu-trigger').hasText('Hover', 'The trigger has the appropriate text');
                assert.dom('.test-menu .menu-content li').exists({
                  count: 3
                }, 'Three li elements are rendered in the menu content');
                assert.dom('.test-menu .menu-content').hasStyle({
                  visibility: 'hidden'
                }, 'The menu content is not visible by default');

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('alignment', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                assert.expect(4);
                _context2.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliMenu class="test-menu" @alignContent={{this.alignContent}} as |Menu|>
                        <Menu.Trigger>Hover</Menu.Trigger>
                        <Menu.Content>
                          <ul>
                            <li>One</li>
                            <li>Two</li>
                            <li>Three</li>
                          </ul>
                        </Menu.Content>
                      </DenaliMenu>
                    
                */
                {"id":"HN2aXFI8","block":"{\"symbols\":[\"Menu\"],\"statements\":[[2,\"\\n      \"],[8,\"denali-menu\",[[24,0,\"test-menu\"]],[[\"@alignContent\"],[[32,0,[\"alignContent\"]]]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[8,[32,1,[\"Trigger\"]],[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"Hover\"]],\"parameters\":[]}]]],[2,\"\\n        \"],[8,[32,1,[\"Content\"]],[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n          \"],[10,\"ul\"],[12],[2,\"\\n            \"],[10,\"li\"],[12],[2,\"One\"],[13],[2,\"\\n            \"],[10,\"li\"],[12],[2,\"Two\"],[13],[2,\"\\n            \"],[10,\"li\"],[12],[2,\"Three\"],[13],[2,\"\\n          \"],[13],[2,\"\\n        \"]],\"parameters\":[]}]]],[2,\"\\n      \"]],\"parameters\":[1]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 3:
                assert.dom('.test-menu').doesNotHaveClass('is-left', 'The menu does not have the `is-left` class by default');
                assert.dom('.test-menu').doesNotHaveClass('is-right', 'The menu does not have the `is-right` class by default');
                this.set('alignContent', 'left');
                assert.dom('.test-menu').hasClass('is-left', 'The menu has the `is-left` class when alignContent is set to left');
                this.set('alignContent', 'right');
                assert.dom('.test-menu').hasClass('is-right', 'The menu has the `is-right` class when alignContent is set to right');

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/integration/components/denali-menu/content-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | denali-menu/content', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliMenu::Content>
                        Inner Content
                      </DenaliMenu::Content>
                    
                */
                {"id":"rQ5ITv0f","block":"{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"denali-menu/content\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        Inner Content\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 2:
                assert.dom('div.menu-content').hasText('Inner Content', 'Menu content div is rendered');

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/integration/components/denali-menu/trigger-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | denali-menu/trigger', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                assert.expect(1);
                _context.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliMenu::Trigger>
                        Trigger
                      </DenaliMenu::Trigger>
                    
                */
                {"id":"9njlsgFY","block":"{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"denali-menu/trigger\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        Trigger\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 3:
                assert.dom('a.menu-trigger').hasText('Trigger', 'The trigger renders the text within an anchor tag');

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/integration/components/denali-modal-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | denali-modal', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        var _this = this;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                assert.expect(6);
                this.set('isOpen', false);
                this.set('onClose', function () {
                  return _this.set('isOpen', false);
                });
                _context.next = 5;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliModal
                        class="denali-modal"
                        @isOpen={{this.isOpen}}
                        @onClose={{this.onClose}}
                        as | Modal |
                      >
                        <Modal.Content class="denali-modal__content">Content</Modal.Content>
                      </DenaliModal>
                    
                */
                {"id":"Ok3SioP5","block":"{\"symbols\":[\"Modal\"],\"statements\":[[2,\"\\n      \"],[8,\"denali-modal\",[[24,0,\"denali-modal\"]],[[\"@isOpen\",\"@onClose\"],[[32,0,[\"isOpen\"]],[32,0,[\"onClose\"]]]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[8,[32,1,[\"Content\"]],[[24,0,\"denali-modal__content\"]],[[],[]],[[\"default\"],[{\"statements\":[[2,\"Content\"]],\"parameters\":[]}]]],[2,\"\\n      \"]],\"parameters\":[1]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 5:
                assert.dom('.denali-modal.modal').doesNotExist('Denali Modal is hidden by default');
                assert.dom('.denali-modal .modal').doesNotExist('Denali Modal is not rendered by default');
                this.set('isOpen', true);
                assert.dom('.denali-modal.modal').exists('Denali Modal is rendered only when isActive is set to true');
                assert.dom('.modal-content.denali-modal__content').hasText('Content', 'Denali Modal Content is rendered in the modal');
                assert.dom('.denali-modal.modal .close').exists('Denali Modal renders a close icon in the modal');
                _context.next = 13;
                return (0, _testHelpers.click)('.denali-modal.modal .close');

              case 13:
                assert.dom('.denali-modal.modal').doesNotExist('The Denali Modal is hidden when close is clicked');

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('Full screen', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                assert.expect(2);
                _context2.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliModal
                        class="denali-modal"
                        @isOpen={{true}}
                        @isFullScreen={{this.fullScreen}}
                        as | Modal |
                      >
                        <Modal.Content>Content</Modal.Content>
                      </DenaliModal>
                    
                */
                {"id":"YiC+HVOP","block":"{\"symbols\":[\"Modal\"],\"statements\":[[2,\"\\n      \"],[8,\"denali-modal\",[[24,0,\"denali-modal\"]],[[\"@isOpen\",\"@isFullScreen\"],[true,[32,0,[\"fullScreen\"]]]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[8,[32,1,[\"Content\"]],[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"Content\"]],\"parameters\":[]}]]],[2,\"\\n      \"]],\"parameters\":[1]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 3:
                assert.dom('.denali-modal .modal-container').doesNotHaveClass('.is-full', 'The modal container does not have the `is-full` class by default');
                this.set('fullScreen', true);
                assert.dom('.denali-modal .modal-container').hasClass('is-full', 'The modal container has the `is-full` when fullScreen arg is set to true');

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('header and footer', /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                assert.expect(2);
                _context3.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliModal
                        class="denali-modal"
                        @isOpen={{true}}
                        as | Modal |
                      >
                        <Modal.Header class="denali-modal__header">Header</Modal.Header>
                        <Modal.Content>Content</Modal.Content>
                        <Modal.Footer class="denali-modal__footer">Footer</Modal.Footer>
                      </DenaliModal>
                    
                */
                {"id":"HU1jfjaz","block":"{\"symbols\":[\"Modal\"],\"statements\":[[2,\"\\n      \"],[8,\"denali-modal\",[[24,0,\"denali-modal\"]],[[\"@isOpen\"],[true]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[8,[32,1,[\"Header\"]],[[24,0,\"denali-modal__header\"]],[[],[]],[[\"default\"],[{\"statements\":[[2,\"Header\"]],\"parameters\":[]}]]],[2,\"\\n        \"],[8,[32,1,[\"Content\"]],[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"Content\"]],\"parameters\":[]}]]],[2,\"\\n        \"],[8,[32,1,[\"Footer\"]],[[24,0,\"denali-modal__footer\"]],[[],[]],[[\"default\"],[{\"statements\":[[2,\"Footer\"]],\"parameters\":[]}]]],[2,\"\\n      \"]],\"parameters\":[1]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 3:
                assert.dom('.modal-header.denali-modal__header').hasText('Header', 'Denali Modal header is rendered');
                assert.dom('.modal-footer.denali-modal__footer').hasText('Footer', 'Denali Modal footer is rendered');

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/integration/components/denali-navbar-test", ["qunit", "ember-qunit", "@ember/test-helpers", "dummy/tests/helpers/setup-router"], function (_qunit, _emberQunit, _testHelpers, _setupRouter) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | denali-navbar', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _setupRouter.default)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliNavbar
                        class="test-nav"
                      >
                      </DenaliNavbar>
                    
                */
                {"id":"yQF8mCbx","block":"{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"denali-navbar\",[[24,0,\"test-nav\"]],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 2:
                assert.dom('nav.nav.test-nav').exists('DenaliNavbar exists and renders a nav element');

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it can support responsive', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliNavbar
                        class="test-nav"
                        @isResponsive={{this.isResponsive}}
                        as |Nav|
                      >
                        <Nav.Left></Nav.Left>
                      </DenaliNavbar>
                    
                */
                {"id":"oeVKEwAq","block":"{\"symbols\":[\"Nav\"],\"statements\":[[2,\"\\n      \"],[8,\"denali-navbar\",[[24,0,\"test-nav\"]],[[\"@isResponsive\"],[[32,0,[\"isResponsive\"]]]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[8,[32,1,[\"Left\"]],[],[[],[]],[[\"default\"],[{\"statements\":[],\"parameters\":[]}]]],[2,\"\\n      \"]],\"parameters\":[1]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 2:
                assert.dom('.test-nav .nav-left .nav-responsive-menu').doesNotExist('DenaliNavbar does not render a responsive menu button by default');
                assert.dom('.test-nav.nav .nav-responsive').doesNotExist('DenaliNavbar does not render a responsive div by default');
                this.set('isResponsive', true);
                assert.dom('.test-nav .nav-left .nav-responsive-menu').exists('DenaliNavbar renders a responsive menu button when `@isResponsive` arg is true');
                assert.dom('.test-nav.nav .nav-responsive').exists('DenaliNavbar renders a responsive div when `@isResponsive` arg is true');
                assert.dom('.test-nav.nav .nav-responsive.is-active').doesNotExist('DenaliNavbar responsive div is not active default');
                _context2.next = 10;
                return (0, _testHelpers.click)('.test-nav .nav-responsive-menu');

              case 10:
                assert.dom('.test-nav.nav .nav-responsive.is-active').exists('DenaliNavbar responsive div is toggled active when clicking the responsive menu');
                _context2.next = 13;
                return (0, _testHelpers.click)('.test-nav .nav-responsive-menu');

              case 13:
                assert.dom('.test-nav.nav .nav-responsive.is-active').doesNotExist('DenaliNavbar responsive div is toggled inactive when clicking the responsive menu');

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it can yield left, center, & right section components', /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliNavbar
                        class="test-nav"
                        as |Nav|
                      >
                        <Nav.Left></Nav.Left>
                        <Nav.Center></Nav.Center>
                        <Nav.Right></Nav.Right>
                      </DenaliNavbar>
                    
                */
                {"id":"MRuzntVe","block":"{\"symbols\":[\"Nav\"],\"statements\":[[2,\"\\n      \"],[8,\"denali-navbar\",[[24,0,\"test-nav\"]],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[8,[32,1,[\"Left\"]],[],[[],[]],[[\"default\"],[{\"statements\":[],\"parameters\":[]}]]],[2,\"\\n        \"],[8,[32,1,[\"Center\"]],[],[[],[]],[[\"default\"],[{\"statements\":[],\"parameters\":[]}]]],[2,\"\\n        \"],[8,[32,1,[\"Right\"]],[],[[],[]],[[\"default\"],[{\"statements\":[],\"parameters\":[]}]]],[2,\"\\n      \"]],\"parameters\":[1]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 2:
                assert.dom('.test-nav.nav .nav-left').exists('DenaliNavbar can yield a left section component');
                assert.dom('.test-nav.nav .nav-center').exists('DenaliNavbar can yield a center section component');
                assert.dom('.test-nav.nav .nav-right').exists('DenaliNavbar can yield a right section component');

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('left can yield sub components', /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(assert) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliNavbar
                        class="test-nav"
                        as |Nav|
                      >
                        <Nav.Left as |Section|>
                          <Section.Logo src="img.png"/>
                          <Section.Item>
                            Nav Item
                          </Section.Item>
                          <Section.Icon @icon="code" />
                          <Section.Control>
                            Nav Control
                          </Section.Control>
                          <Section.Link href="http://denali.design" />
                          <Section.LinkTo @route="four-oh-four" />
                        </Nav.Left>
                      </DenaliNavbar>
                    
                */
                {"id":"OODAhRGw","block":"{\"symbols\":[\"Nav\",\"Section\"],\"statements\":[[2,\"\\n      \"],[8,\"denali-navbar\",[[24,0,\"test-nav\"]],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[8,[32,1,[\"Left\"]],[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n          \"],[8,[32,2,[\"Logo\"]],[[24,\"src\",\"img.png\"]],[[],[]],null],[2,\"\\n          \"],[8,[32,2,[\"Item\"]],[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n            Nav Item\\n          \"]],\"parameters\":[]}]]],[2,\"\\n          \"],[8,[32,2,[\"Icon\"]],[],[[\"@icon\"],[\"code\"]],null],[2,\"\\n          \"],[8,[32,2,[\"Control\"]],[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n            Nav Control\\n          \"]],\"parameters\":[]}]]],[2,\"\\n          \"],[8,[32,2,[\"Link\"]],[[24,6,\"http://denali.design\"]],[[],[]],null],[2,\"\\n          \"],[8,[32,2,[\"LinkTo\"]],[],[[\"@route\"],[\"four-oh-four\"]],null],[2,\"\\n        \"]],\"parameters\":[2]}]]],[2,\"\\n      \"]],\"parameters\":[1]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 2:
                assert.dom('.test-nav .nav-left .nav-brand').hasAttribute('src', 'img.png', 'Left can yield a nav logo component');
                assert.dom('.test-nav .nav-left .nav-item').hasText('Nav Item', 'Left can yield a nav item component');
                assert.dom('.test-nav .nav-left .nav-icon .d-icon').hasClass('d-code', 'Left can yield a nav icon component');
                assert.dom('.test-nav .nav-left .nav-control').hasText('Nav Control', 'Left can yield a nav control component');
                assert.dom('.test-nav .nav-left a.nav-item').hasAttribute('href', 'http://denali.design', 'Left can yield a nav link component');
                assert.dom('.test-nav .nav-left a.ember-view.nav-item').hasAttribute('href', '/four-oh-four', 'Left can yield a nav link-to component');

              case 8:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function (_x4) {
        return _ref5.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('left can yield sub components when `@isResponsive` is true', /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(assert) {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliNavbar
                        class="test-nav"
                        @isResponsive={{true}}
                        as |Nav|
                      >
                        <Nav.Left as |Section|>
                          <Section.Logo src="img.png"/>
                          <Section.Item>
                            Nav Item
                          </Section.Item>
                          <Section.Icon @icon="code" />
                          <Section.Control>
                            Nav Control
                          </Section.Control>
                          <Section.Link href="http://denali.design" />
                          <Section.LinkTo @route="four-oh-four" />
                        </Nav.Left>
                      </DenaliNavbar>
                    
                */
                {"id":"VPo0X2Cx","block":"{\"symbols\":[\"Nav\",\"Section\"],\"statements\":[[2,\"\\n      \"],[8,\"denali-navbar\",[[24,0,\"test-nav\"]],[[\"@isResponsive\"],[true]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[8,[32,1,[\"Left\"]],[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n          \"],[8,[32,2,[\"Logo\"]],[[24,\"src\",\"img.png\"]],[[],[]],null],[2,\"\\n          \"],[8,[32,2,[\"Item\"]],[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n            Nav Item\\n          \"]],\"parameters\":[]}]]],[2,\"\\n          \"],[8,[32,2,[\"Icon\"]],[],[[\"@icon\"],[\"code\"]],null],[2,\"\\n          \"],[8,[32,2,[\"Control\"]],[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n            Nav Control\\n          \"]],\"parameters\":[]}]]],[2,\"\\n          \"],[8,[32,2,[\"Link\"]],[[24,6,\"http://denali.design\"]],[[],[]],null],[2,\"\\n          \"],[8,[32,2,[\"LinkTo\"]],[],[[\"@route\"],[\"four-oh-four\"]],null],[2,\"\\n        \"]],\"parameters\":[2]}]]],[2,\"\\n      \"]],\"parameters\":[1]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 2:
                assert.dom('.test-nav .nav-left .nav-brand').hasAttribute('src', 'img.png', 'Left can yield a nav logo component');
                assert.dom('.test-nav .nav-left .nav-item').hasText('Nav Item', 'Left can yield a nav item component');
                assert.dom('.test-nav .nav-left .nav-icon .d-icon').hasClass('d-code', 'Left can yield a nav icon component');
                assert.dom('.test-nav .nav-left .nav-control').hasText('Nav Control', 'Left can yield a nav control component');
                assert.dom('.test-nav .nav-left a.nav-item').hasAttribute('href', 'http://denali.design', 'Left can yield a nav link component');
                assert.dom('.test-nav .nav-left a.ember-view.nav-item').hasAttribute('href', '/four-oh-four', 'Left can yield a nav link-to component');

              case 8:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      return function (_x5) {
        return _ref6.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('center can yield sub components', /*#__PURE__*/function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(assert) {
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliNavbar
                        class="test-nav"
                        as |Nav|
                      >
                        <Nav.Center as |Section|>
                          <Section.Logo src="img.png"/>
                          <Section.Item>
                            Nav Item
                          </Section.Item>
                          <Section.Icon @icon="code" />
                          <Section.Control>
                            Nav Control
                          </Section.Control>
                          <Section.Link href="http://denali.design" />
                          <Section.LinkTo @route="four-oh-four" />
                        </Nav.Center>
                      </DenaliNavbar>
                    
                */
                {"id":"i+dWApSz","block":"{\"symbols\":[\"Nav\",\"Section\"],\"statements\":[[2,\"\\n      \"],[8,\"denali-navbar\",[[24,0,\"test-nav\"]],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[8,[32,1,[\"Center\"]],[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n          \"],[8,[32,2,[\"Logo\"]],[[24,\"src\",\"img.png\"]],[[],[]],null],[2,\"\\n          \"],[8,[32,2,[\"Item\"]],[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n            Nav Item\\n          \"]],\"parameters\":[]}]]],[2,\"\\n          \"],[8,[32,2,[\"Icon\"]],[],[[\"@icon\"],[\"code\"]],null],[2,\"\\n          \"],[8,[32,2,[\"Control\"]],[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n            Nav Control\\n          \"]],\"parameters\":[]}]]],[2,\"\\n          \"],[8,[32,2,[\"Link\"]],[[24,6,\"http://denali.design\"]],[[],[]],null],[2,\"\\n          \"],[8,[32,2,[\"LinkTo\"]],[],[[\"@route\"],[\"four-oh-four\"]],null],[2,\"\\n        \"]],\"parameters\":[2]}]]],[2,\"\\n      \"]],\"parameters\":[1]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 2:
                assert.dom('.test-nav .nav-center .nav-brand').hasAttribute('src', 'img.png', 'Center can yield a nav logo component');
                assert.dom('.test-nav .nav-center .nav-item').hasText('Nav Item', 'Center can yield a nav item component');
                assert.dom('.test-nav .nav-center .nav-icon .d-icon').hasClass('d-code', 'Center can yield a nav icon component');
                assert.dom('.test-nav .nav-center .nav-control').hasText('Nav Control', 'Center can yield a nav control component');
                assert.dom('.test-nav .nav-center a.nav-item').hasAttribute('href', 'http://denali.design', 'Center can yield a nav link component');
                assert.dom('.test-nav .nav-center a.ember-view.nav-item').hasAttribute('href', '/four-oh-four', 'Center can yield a nav link-to component');

              case 8:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      return function (_x6) {
        return _ref7.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('right can yield sub components', /*#__PURE__*/function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(assert) {
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliNavbar
                        class="test-nav"
                        as |Nav|
                      >
                        <Nav.Right as |Section|>
                          <Section.Logo src="img.png"/>
                          <Section.Item>
                            Nav Item
                          </Section.Item>
                          <Section.Icon @icon="code" />
                          <Section.Control>
                            Nav Control
                          </Section.Control>
                          <Section.Link href="http://denali.design" />
                          <Section.LinkTo @route="four-oh-four" />
                        </Nav.Right>
                      </DenaliNavbar>
                    
                */
                {"id":"+mBMLq+E","block":"{\"symbols\":[\"Nav\",\"Section\"],\"statements\":[[2,\"\\n      \"],[8,\"denali-navbar\",[[24,0,\"test-nav\"]],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[8,[32,1,[\"Right\"]],[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n          \"],[8,[32,2,[\"Logo\"]],[[24,\"src\",\"img.png\"]],[[],[]],null],[2,\"\\n          \"],[8,[32,2,[\"Item\"]],[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n            Nav Item\\n          \"]],\"parameters\":[]}]]],[2,\"\\n          \"],[8,[32,2,[\"Icon\"]],[],[[\"@icon\"],[\"code\"]],null],[2,\"\\n          \"],[8,[32,2,[\"Control\"]],[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n            Nav Control\\n          \"]],\"parameters\":[]}]]],[2,\"\\n          \"],[8,[32,2,[\"Link\"]],[[24,6,\"http://denali.design\"]],[[],[]],null],[2,\"\\n          \"],[8,[32,2,[\"LinkTo\"]],[],[[\"@route\"],[\"four-oh-four\"]],null],[2,\"\\n        \"]],\"parameters\":[2]}]]],[2,\"\\n      \"]],\"parameters\":[1]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 2:
                assert.dom('.test-nav .nav-right .nav-brand').hasAttribute('src', 'img.png', 'Right can yield a nav logo component');
                assert.dom('.test-nav .nav-right .nav-item').hasText('Nav Item', 'Right can yield a nav item component');
                assert.dom('.test-nav .nav-right .nav-icon .d-icon').hasClass('d-code', 'Right can yield a nav icon component');
                assert.dom('.test-nav .nav-right .nav-control').hasText('Nav Control', 'Right can yield a nav control component');
                assert.dom('.test-nav .nav-right a.nav-item').hasAttribute('href', 'http://denali.design', 'Right can yield a nav link component');
                assert.dom('.test-nav .nav-right a.ember-view.nav-item').hasAttribute('href', '/four-oh-four', 'Right can yield a nav link-to component');

              case 8:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      return function (_x7) {
        return _ref8.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/integration/components/denali-navbar/control-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | denali-navbar/control', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliNavbar::Control>
                        Inner Content
                      </DenaliNavbar::Control>
                    
                */
                {"id":"BI/6rltx","block":"{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"denali-navbar/control\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        Inner Content\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 2:
                assert.dom('div.nav-control').hasText('Inner Content', 'DenaliNavbar::Control exists and renders inner content');

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/integration/components/denali-navbar/icon-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | denali-navbar/icon', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.set('icon', 'code');
                _context.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliNavbar::Icon
                        @icon={{this.icon}}
                      />
                    
                */
                {"id":"mln9tsIW","block":"{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"denali-navbar/icon\",[],[[\"@icon\"],[[32,0,[\"icon\"]]]],null],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 3:
                assert.dom('.nav-icon .d-icon.d-code').exists('DenaliNavbar::Icon exists and has the correct icon class');
                this.set('icon', 'bug');
                assert.dom('.nav-icon .d-icon.d-bug').exists('DenaliNavbar::Icon exists and has the correct icon class');

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('name renders', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliNavbar::Icon
                        @icon="code"
                        @name={{this.name}}
                      />
                    
                */
                {"id":"vqECCH1n","block":"{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"denali-navbar/icon\",[],[[\"@icon\",\"@name\"],[\"code\",[32,0,[\"name\"]]]],null],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 2:
                assert.dom('.nav-icon .d-icon.d-code').exists('DenaliNavbar::Icon exists and has the correct icon class');
                assert.dom('.icon-name').doesNotExist('DenaliNavbar::Icon exists and does not have a name.');
                this.set('name', 'My Icon');
                assert.dom('.icon-name').hasText('My Icon', 'DenaliNavbar::Icon exists and has a name.');

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/integration/components/denali-navbar/item-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | denali-navbar/item', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliNavbar::Item>
                        Inner Content
                      </DenaliNavbar::Item>
                    
                */
                {"id":"rhHP+bze","block":"{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"denali-navbar/item\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        Inner Content\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 2:
                assert.dom('span.nav-item').hasText('Inner Content', 'DenaliNavbar::Item exists and renders inner content');

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it an be set active ', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliNavbar::Item
                        @isActive={{this.isActive}}
                      >
                        Inner Content
                      </DenaliNavbar::Item>
                    
                */
                {"id":"CMufCq6h","block":"{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"denali-navbar/item\",[],[[\"@isActive\"],[[32,0,[\"isActive\"]]]],[[\"default\"],[{\"statements\":[[2,\"\\n        Inner Content\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 2:
                assert.dom('span.nav-item').doesNotHaveClass('is-active', 'DenaliNavbar::Item is not active by default');
                this.set('isActive', true);
                assert.dom('span.nav-item').hasClass('is-active', 'DenaliNavbar::Item is active when `@isActive` arg is true');

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/integration/components/denali-navbar/logo-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | denali-navbar/logo', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <DenaliNavbar::Logo @src="logo.png"/>
                */
                {"id":"wnv4qqP2","block":"{\"symbols\":[],\"statements\":[[8,\"denali-navbar/logo\",[],[[\"@src\"],[\"logo.png\"]],null]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 2:
                assert.dom('img').hasClass('nav-brand', 'DenaliNavbar::Logo renders an img with the correct class');
                assert.dom('img.nav-brand').hasAttribute('src', 'logo.png', 'DenaliNavbar::Logo renders src attr with the correct value');
                assert.dom('img.nav-brand').hasAttribute('alt', 'logo', 'DenaliNavbar::Logo renders alt attr with the default value');

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/integration/components/denali-radio-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | denali-radio', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                assert.expect(2);
                _context.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliRadio as |Radio|>
                        <Radio.Option @value="">Inner Content</Radio.Option>
                      </DenaliRadio>
                    
                */
                {"id":"arjsrftb","block":"{\"symbols\":[\"Radio\"],\"statements\":[[2,\"\\n      \"],[8,\"denali-radio\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[8,[32,1,[\"Option\"]],[],[[\"@value\"],[\"\"]],[[\"default\"],[{\"statements\":[[2,\"Inner Content\"]],\"parameters\":[]}]]],[2,\"\\n      \"]],\"parameters\":[1]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 3:
                assert.dom('div.radio').exists({
                  count: 1
                }, 'DenaliRadio Option exists');
                assert.dom('div.radio').hasText('Inner Content', 'DenaliRadio Option renders inner content');

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('handles change events', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                assert.expect(6);
                _context2.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliRadio @onChanged={{this.onChanged}} as |Radio|>
                        <Radio.Option @value={{1}}>1</Radio.Option>
                        <Radio.Option @value="surprise">2</Radio.Option>
                        <Radio.Option @value={{3}}>3</Radio.Option>
                      </DenaliRadio>
                    
                */
                {"id":"zwV2Vaxf","block":"{\"symbols\":[\"Radio\"],\"statements\":[[2,\"\\n      \"],[8,\"denali-radio\",[],[[\"@onChanged\"],[[32,0,[\"onChanged\"]]]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[8,[32,1,[\"Option\"]],[],[[\"@value\"],[1]],[[\"default\"],[{\"statements\":[[2,\"1\"]],\"parameters\":[]}]]],[2,\"\\n        \"],[8,[32,1,[\"Option\"]],[],[[\"@value\"],[\"surprise\"]],[[\"default\"],[{\"statements\":[[2,\"2\"]],\"parameters\":[]}]]],[2,\"\\n        \"],[8,[32,1,[\"Option\"]],[],[[\"@value\"],[3]],[[\"default\"],[{\"statements\":[[2,\"3\"]],\"parameters\":[]}]]],[2,\"\\n      \"]],\"parameters\":[1]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 3:
                this.set('onChanged', function (value) {
                  return assert.equal(value, 3, 'the last value is clicked');
                });
                _context2.next = 6;
                return (0, _testHelpers.click)('.radio input[value="3"]');

              case 6:
                assert.dom('.radio input[value="3"]').isChecked('true', 'The element is marked as checked after being clicked');
                this.set('onChanged', function (value) {
                  return assert.equal(value, 1, 'the first value is clicked');
                });
                _context2.next = 10;
                return (0, _testHelpers.click)('.radio input[value="1"]');

              case 10:
                assert.dom('.radio input[value="1"]').isChecked('true', 'The element is marked as checked after being clicked');
                this.set('onChanged', function (value) {
                  return assert.equal(value, 'surprise', 'the middle value is clicked');
                });
                _context2.next = 14;
                return (0, _testHelpers.click)('.radio input[value="surprise"]');

              case 14:
                assert.dom('.radio input[value="surprise"]').isChecked('The element is marked as checked after being clicked');

              case 15:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('disabled elements', /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliRadio @onChanged={{this.onChanged}} as |Radio|>
                        <Radio.Option @value={{1}}>1</Radio.Option>
                        <Radio.Option @value="surprise" @disabled={{true}}>2</Radio.Option>
                      </DenaliRadio>
                    
                */
                {"id":"mQXUTACK","block":"{\"symbols\":[\"Radio\"],\"statements\":[[2,\"\\n      \"],[8,\"denali-radio\",[],[[\"@onChanged\"],[[32,0,[\"onChanged\"]]]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[8,[32,1,[\"Option\"]],[],[[\"@value\"],[1]],[[\"default\"],[{\"statements\":[[2,\"1\"]],\"parameters\":[]}]]],[2,\"\\n        \"],[8,[32,1,[\"Option\"]],[],[[\"@value\",\"@disabled\"],[\"surprise\",true]],[[\"default\"],[{\"statements\":[[2,\"2\"]],\"parameters\":[]}]]],[2,\"\\n      \"]],\"parameters\":[1]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 2:
                assert.dom('.radio input[value="surprise"]').hasAttribute('disabled', '', 'The element is marked as disabled');

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('checked elements', /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(assert) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                assert.expect(6);
                this.checked = false;
                _context4.next = 4;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliRadio as |Radio|>
                        <Radio.Option @value={{1}}>1</Radio.Option>
                        <Radio.Option @value={{2}} @checked={{this.checked}}>2</Radio.Option>
                        <Radio.Option @value="surprise" @disabled={{true}}>2</Radio.Option>
                      </DenaliRadio>
                    
                */
                {"id":"ib8eFMGi","block":"{\"symbols\":[\"Radio\"],\"statements\":[[2,\"\\n      \"],[8,\"denali-radio\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[8,[32,1,[\"Option\"]],[],[[\"@value\"],[1]],[[\"default\"],[{\"statements\":[[2,\"1\"]],\"parameters\":[]}]]],[2,\"\\n        \"],[8,[32,1,[\"Option\"]],[],[[\"@value\",\"@checked\"],[2,[32,0,[\"checked\"]]]],[[\"default\"],[{\"statements\":[[2,\"2\"]],\"parameters\":[]}]]],[2,\"\\n        \"],[8,[32,1,[\"Option\"]],[],[[\"@value\",\"@disabled\"],[\"surprise\",true]],[[\"default\"],[{\"statements\":[[2,\"2\"]],\"parameters\":[]}]]],[2,\"\\n      \"]],\"parameters\":[1]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 4:
                assert.dom('.radio input[value="1"]').isNotChecked('The option is not marked as checked');
                assert.dom('.radio input[value="2"]').isNotChecked('The option is not marked as checked');
                assert.dom('.radio input[value="surprise"]').isNotChecked('The option is not marked as checked');
                this.set('checked', true);
                assert.dom('.radio input[value="1"]').isNotChecked('The option is still not marked as checked');
                assert.dom('.radio input[value="2"]').isChecked('The option is marked as checked after being set by attribute');
                assert.dom('.radio input[value="surprise"]').isNotChecked('The option is still not marked as checked');

              case 11:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function (_x4) {
        return _ref5.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('clicking label', /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(assert) {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                assert.expect(3);
                _context5.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliRadio @onChanged={{this.onChanged}} as |Radio|>
                        <Radio.Option @value={{1}}>1</Radio.Option>
                      </DenaliRadio>
                    
                */
                {"id":"6LPb/vgE","block":"{\"symbols\":[\"Radio\"],\"statements\":[[2,\"\\n      \"],[8,\"denali-radio\",[],[[\"@onChanged\"],[[32,0,[\"onChanged\"]]]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[8,[32,1,[\"Option\"]],[],[[\"@value\"],[1]],[[\"default\"],[{\"statements\":[[2,\"1\"]],\"parameters\":[]}]]],[2,\"\\n      \"]],\"parameters\":[1]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 3:
                this.set('onChanged', function (value) {
                  return assert.equal(value, 1, 'the event is triggered when clicking a label');
                });
                assert.dom('.radio input').isNotChecked('The option is not marked as checked');
                _context5.next = 7;
                return (0, _testHelpers.click)('.radio label');

              case 7:
                assert.dom('.radio input').isChecked('The option is marked as checked after clicking the label');

              case 8:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      return function (_x5) {
        return _ref6.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/integration/components/denali-radio-toggle-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | denali-radio-toggle', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliRadioToggle as |Toggle|>
                        <Toggle.Option @value="1">Item 1</Toggle.Option>
                      </DenaliRadioToggle>
                */
                {"id":"7ZBsvnII","block":"{\"symbols\":[\"Toggle\"],\"statements\":[[2,\"\\n      \"],[8,\"denali-radio-toggle\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[8,[32,1,[\"Option\"]],[],[[\"@value\"],[\"1\"]],[[\"default\"],[{\"statements\":[[2,\"Item 1\"]],\"parameters\":[]}]]],[2,\"\\n      \"]],\"parameters\":[1]}]]]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 2:
                assert.dom('label').hasText('Item 1', 'DenaliRadioToggle.Option exists and renders inner content');
                assert.dom('input').hasAttribute('value', '1', 'DenaliRadioToggle.Option exists and has a value');

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it handles change events for radio options', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                assert.expect(6);
                _context2.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliRadioToggle @onChanged={{this.onChanged}} as |Toggle|>
                        <Toggle.Option @value={{1}}>1</Toggle.Option>
                        <Toggle.Option @value="surprise">2</Toggle.Option>
                        <Toggle.Option @value={{3}}>3</Toggle.Option>
                      </DenaliRadioToggle>
                    
                */
                {"id":"iAWwaRYd","block":"{\"symbols\":[\"Toggle\"],\"statements\":[[2,\"\\n      \"],[8,\"denali-radio-toggle\",[],[[\"@onChanged\"],[[32,0,[\"onChanged\"]]]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[8,[32,1,[\"Option\"]],[],[[\"@value\"],[1]],[[\"default\"],[{\"statements\":[[2,\"1\"]],\"parameters\":[]}]]],[2,\"\\n        \"],[8,[32,1,[\"Option\"]],[],[[\"@value\"],[\"surprise\"]],[[\"default\"],[{\"statements\":[[2,\"2\"]],\"parameters\":[]}]]],[2,\"\\n        \"],[8,[32,1,[\"Option\"]],[],[[\"@value\"],[3]],[[\"default\"],[{\"statements\":[[2,\"3\"]],\"parameters\":[]}]]],[2,\"\\n      \"]],\"parameters\":[1]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 3:
                this.set('onChanged', function (value) {
                  return assert.equal(value, 3, 'the last value is clicked');
                });
                _context2.next = 6;
                return (0, _testHelpers.click)('.toggle input[value="3"]');

              case 6:
                assert.dom('.toggle input[value="3"]').isChecked('true', 'The element is marked as checked after being clicked');
                this.set('onChanged', function (value) {
                  return assert.equal(value, 1, 'the first value is clicked');
                });
                _context2.next = 10;
                return (0, _testHelpers.click)('.toggle input[value="1"]');

              case 10:
                assert.dom('.toggle input[value="1"]').isChecked('true', 'The element is marked as checked after being clicked');
                this.set('onChanged', function (value) {
                  return assert.equal(value, 'surprise', 'the middle value is clicked');
                });
                _context2.next = 14;
                return (0, _testHelpers.click)('.toggle input[value="surprise"]');

              case 14:
                assert.dom('.toggle input[value="surprise"]').isChecked('The element is marked as checked after being clicked');

              case 15:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it handles disabled elements for radio options', /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliRadioToggle @onChanged={{this.onChanged}} as |Toggle|>
                        <Toggle.Option @value={{1}}>1</Toggle.Option>
                        <Toggle.Option @value="surprise" @disabled={{true}}>2</Toggle.Option>
                      </DenaliRadioToggle>
                    
                */
                {"id":"3aI1tdRk","block":"{\"symbols\":[\"Toggle\"],\"statements\":[[2,\"\\n      \"],[8,\"denali-radio-toggle\",[],[[\"@onChanged\"],[[32,0,[\"onChanged\"]]]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[8,[32,1,[\"Option\"]],[],[[\"@value\"],[1]],[[\"default\"],[{\"statements\":[[2,\"1\"]],\"parameters\":[]}]]],[2,\"\\n        \"],[8,[32,1,[\"Option\"]],[],[[\"@value\",\"@disabled\"],[\"surprise\",true]],[[\"default\"],[{\"statements\":[[2,\"2\"]],\"parameters\":[]}]]],[2,\"\\n      \"]],\"parameters\":[1]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 2:
                assert.dom('.toggle input[value="surprise"]').hasAttribute('disabled', '', 'The element is marked as disabled');

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it handles checked elements for radio options', /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(assert) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                assert.expect(6);
                this.checked = false;
                _context4.next = 4;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliRadioToggle as |Toggle|>
                        <Toggle.Option @value={{1}}>1</Toggle.Option>
                        <Toggle.Option @value={{2}} @checked={{this.checked}}>2</Toggle.Option>
                        <Toggle.Option @value="surprise" @disabled={{true}}>2</Toggle.Option>
                      </DenaliRadioToggle>
                    
                */
                {"id":"FQ8XbPHJ","block":"{\"symbols\":[\"Toggle\"],\"statements\":[[2,\"\\n      \"],[8,\"denali-radio-toggle\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[8,[32,1,[\"Option\"]],[],[[\"@value\"],[1]],[[\"default\"],[{\"statements\":[[2,\"1\"]],\"parameters\":[]}]]],[2,\"\\n        \"],[8,[32,1,[\"Option\"]],[],[[\"@value\",\"@checked\"],[2,[32,0,[\"checked\"]]]],[[\"default\"],[{\"statements\":[[2,\"2\"]],\"parameters\":[]}]]],[2,\"\\n        \"],[8,[32,1,[\"Option\"]],[],[[\"@value\",\"@disabled\"],[\"surprise\",true]],[[\"default\"],[{\"statements\":[[2,\"2\"]],\"parameters\":[]}]]],[2,\"\\n      \"]],\"parameters\":[1]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 4:
                assert.dom('.toggle input[value="1"]').isNotChecked('The option is not marked as checked');
                assert.dom('.toggle input[value="2"]').isNotChecked('The option is not marked as checked');
                assert.dom('.toggle input[value="surprise"]').isNotChecked('The option is not marked as checked');
                this.set('checked', true);
                assert.dom('.toggle input[value="1"]').isNotChecked('The option is still not marked as checked');
                assert.dom('.toggle input[value="2"]').isChecked('The option is marked as checked after being set by attribute');
                assert.dom('.toggle input[value="surprise"]').isNotChecked('The option is still not marked as checked');

              case 11:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function (_x4) {
        return _ref5.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it handles clicking labels for radio options', /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(assert) {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                assert.expect(3);
                _context5.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliRadioToggle @onChanged={{this.onChanged}} as |Toggle|>
                        <Toggle.Option @value={{1}}>1</Toggle.Option>
                      </DenaliRadioToggle>
                    
                */
                {"id":"iVULLrbh","block":"{\"symbols\":[\"Toggle\"],\"statements\":[[2,\"\\n      \"],[8,\"denali-radio-toggle\",[],[[\"@onChanged\"],[[32,0,[\"onChanged\"]]]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[8,[32,1,[\"Option\"]],[],[[\"@value\"],[1]],[[\"default\"],[{\"statements\":[[2,\"1\"]],\"parameters\":[]}]]],[2,\"\\n      \"]],\"parameters\":[1]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 3:
                this.set('onChanged', function (value) {
                  return assert.equal(value, 1, 'the event is triggered when clicking a label');
                });
                assert.dom('.toggle input').isNotChecked('The option is not marked as checked');
                _context5.next = 7;
                return (0, _testHelpers.click)('.toggle label');

              case 7:
                assert.dom('.toggle input').isChecked('The option is marked as checked after clicking the label');

              case 8:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      return function (_x5) {
        return _ref6.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it supports small size', /*#__PURE__*/function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(assert) {
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliRadioToggle @isSmall={{this.isSmall}} as |Toggle|>
                        <Toggle.Option @value={{1}}>Item 1</Toggle.Option>
                      </DenaliRadioToggle>
                    
                */
                {"id":"BjZn/wOP","block":"{\"symbols\":[\"Toggle\"],\"statements\":[[2,\"\\n      \"],[8,\"denali-radio-toggle\",[],[[\"@isSmall\"],[[32,0,[\"isSmall\"]]]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[8,[32,1,[\"Option\"]],[],[[\"@value\"],[1]],[[\"default\"],[{\"statements\":[[2,\"Item 1\"]],\"parameters\":[]}]]],[2,\"\\n      \"]],\"parameters\":[1]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 2:
                assert.dom('.toggle').doesNotHaveClass('is-small', 'DenaliToggle does not have small styling by default');
                this.set('isSmall', 'true');
                assert.dom('.toggle').hasClass('is-small', 'DenaliToggle has a small size when `@isSmall` arg is set to true');

              case 5:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      return function (_x6) {
        return _ref7.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it supports inverse colors', /*#__PURE__*/function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(assert) {
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliRadioToggle @isInverse={{this.isInverse}} as |Toggle|>
                        <Toggle.Option @value={{1}}>Item 1</Toggle.Option>
                      </DenaliRadioToggle>
                    
                */
                {"id":"FtXGd/0l","block":"{\"symbols\":[\"Toggle\"],\"statements\":[[2,\"\\n      \"],[8,\"denali-radio-toggle\",[],[[\"@isInverse\"],[[32,0,[\"isInverse\"]]]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[8,[32,1,[\"Option\"]],[],[[\"@value\"],[1]],[[\"default\"],[{\"statements\":[[2,\"Item 1\"]],\"parameters\":[]}]]],[2,\"\\n      \"]],\"parameters\":[1]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 2:
                assert.dom('.toggle').doesNotHaveClass('is-inverse', 'DenaliToggle does not have inverse styling by default');
                this.set('isInverse', 'true');
                assert.dom('.toggle').hasClass('is-inverse', 'DenaliToggle has inverse styling when `@isInverse` arg is set to true');

              case 5:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      return function (_x7) {
        return _ref8.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/integration/components/denali-select-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  var opts = [{
    text: 'Item 1'
  }, {
    text: 'Item 2'
  }, {
    text: 'Item 3'
  }];
  (0, _qunit.module)('Integration | Component | denali-select', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it requires options', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                assert.expect(1);
                (0, _testHelpers.setupOnerror)(function (_ref3) {
                  var message = _ref3.message;
                  assert.equal(message, 'Failed prop type: The prop `options` is marked as required in `DenaliSelectComponent`, but its value is `undefined`.', 'If @args() contains a PropType validator, an error will be thrown if the value is incorrect');
                });
                _context.next = 4;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <DenaliSelect />
                */
                {"id":"xNQmAttq","block":"{\"symbols\":[],\"statements\":[[8,\"denali-select\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it renders an option string', /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                assert.expect(3);
                _context2.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliSelect @options={{array "Item 1"}} @onChange={{this.onChange}} as |option|>
                        {{option}}
                      </DenaliSelect>
                    
                */
                {"id":"iMJ1Oq7y","block":"{\"symbols\":[\"option\"],\"statements\":[[2,\"\\n      \"],[8,\"denali-select\",[],[[\"@options\",\"@onChange\"],[[30,[36,0],[\"Item 1\"],null],[32,0,[\"onChange\"]]]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[1,[32,1]],[2,\"\\n      \"]],\"parameters\":[1]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[\"array\"]}","moduleName":"(unknown template module)"}));

              case 3:
                assert.dom('div.input.has-arrow').exists('DenaliSelect renders an wrapper div');
                assert.dom('div.input select').exists('DenaliSelect renders a select element.');
                assert.dom('div.input option').hasText('Item 1', 'DenaliSelect option exists and renders text.');

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x2) {
        return _ref4.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it renders an option object', /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                assert.expect(3);
                _context3.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliSelect @options={{array (hash text="Item 1")}} as |option|>
                        {{option.text}}
                      </DenaliSelect>
                    
                */
                {"id":"kRWZLTl9","block":"{\"symbols\":[\"option\"],\"statements\":[[2,\"\\n      \"],[8,\"denali-select\",[],[[\"@options\"],[[30,[36,1],[[30,[36,0],null,[[\"text\"],[\"Item 1\"]]]],null]]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[1,[32,1,[\"text\"]]],[2,\"\\n      \"]],\"parameters\":[1]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[\"hash\",\"array\"]}","moduleName":"(unknown template module)"}));

              case 3:
                assert.dom('div.input.has-arrow').exists('DenaliSelect renders an wrapper div');
                assert.dom('div.input select').exists('DenaliSelect renders a select element.');
                assert.dom('div.input option').hasText('Item 1', 'DenaliSelect option exists and renders an object.');

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x3) {
        return _ref5.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('an option is active', /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(assert) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                assert.expect(1);
                _context4.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliSelect @options={{this.options}} @selectedOption={{this.selectedOption}} as |option|>
                        {{option.text}}
                      </DenaliSelect>
                    
                */
                {"id":"ALjXIymF","block":"{\"symbols\":[\"option\"],\"statements\":[[2,\"\\n      \"],[8,\"denali-select\",[],[[\"@options\",\"@selectedOption\"],[[32,0,[\"options\"]],[32,0,[\"selectedOption\"]]]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[1,[32,1,[\"text\"]]],[2,\"\\n      \"]],\"parameters\":[1]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 3:
                this.set('options', opts);
                this.set('selectedOption', opts[1]);
                assert.equal((0, _testHelpers.find)('div.input select').selectedIndex, 1, 'DenaliSelect selects the object given by the `@selectedOption` arg');

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function (_x4) {
        return _ref6.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('an option is disabled', /*#__PURE__*/function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(assert) {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                assert.expect(1);
                _context5.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliSelect @options={{this.options}} @disabledOptions={{this.disabled}} as |option|>
                        {{option.text}}
                      </DenaliSelect>
                    
                */
                {"id":"kgli1fE2","block":"{\"symbols\":[\"option\"],\"statements\":[[2,\"\\n      \"],[8,\"denali-select\",[],[[\"@options\",\"@disabledOptions\"],[[32,0,[\"options\"]],[32,0,[\"disabled\"]]]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[1,[32,1,[\"text\"]]],[2,\"\\n      \"]],\"parameters\":[1]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 3:
                this.set('options', opts);
                this.set('disabled', [opts[1]]);
                assert.deepEqual((0, _testHelpers.findAll)('div.input option').map(function (e) {
                  return e.disabled;
                }), [false, true, false], 'DenaliSelect options are enabled and disabled as specified.');

              case 6:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      return function (_x5) {
        return _ref7.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it supports wrapperClass', /*#__PURE__*/function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(assert) {
        var wrapperClass;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                this.set('options', opts);
                _context6.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliSelect
                        @options={{this.options}}
                        @wrapperClass={{this.wrapperClass}}
                        as |option|
                      >
                        {{option.text}}
                      </DenaliSelect>
                    
                */
                {"id":"hbP2x4Dp","block":"{\"symbols\":[\"option\"],\"statements\":[[2,\"\\n      \"],[8,\"denali-select\",[],[[\"@options\",\"@wrapperClass\"],[[32,0,[\"options\"]],[32,0,[\"wrapperClass\"]]]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[1,[32,1,[\"text\"]]],[2,\"\\n      \"]],\"parameters\":[1]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 3:
                wrapperClass = 'wrapperClass';
                assert.dom('.input').doesNotHaveClass(wrapperClass, 'DenaliSelect wrapper does not have a size class by default');
                this.set('wrapperClass', wrapperClass);
                assert.dom('.input').hasClass(wrapperClass, 'DenaliSelect wrapper has the provided wrapper class');

              case 7:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      return function (_x6) {
        return _ref8.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it supports sizes', /*#__PURE__*/function () {
      var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(assert) {
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                this.set('options', opts);
                _context7.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliSelect
                        @options={{this.options}}
                        @size={{this.size}}
                        as |option|
                      >
                        {{option.text}}
                      </DenaliSelect>
                    
                */
                {"id":"ktlIT93L","block":"{\"symbols\":[\"option\"],\"statements\":[[2,\"\\n      \"],[8,\"denali-select\",[],[[\"@options\",\"@size\"],[[32,0,[\"options\"]],[32,0,[\"size\"]]]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[1,[32,1,[\"text\"]]],[2,\"\\n      \"]],\"parameters\":[1]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 3:
                assert.dom('.input').doesNotHaveClass(/is-small|is-medium|is-large/, 'DenaliSelect wrapper does not have a size class by default');
                this.set('size', 'small');
                assert.dom('.input').hasClass('is-small', 'DenaliSelect wrapper has the appropriate class for small');
                this.set('size', 'medium');
                assert.dom('.input').hasClass('is-medium', 'DenaliSelect wrapper has the appropriate class for medium');
                this.set('size', 'large');
                assert.dom('.input').hasClass('is-large', 'DenaliSelect wrapper has the appropriate class for large');

              case 10:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      return function (_x7) {
        return _ref9.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it supports inverse colors', /*#__PURE__*/function () {
      var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(assert) {
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                assert.expect(2);
                _context8.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliSelect @options={{this.options}} @isInverse={{this.isInverse}} as |option|>
                        {{option.text}}
                      </DenaliSelect>
                    
                */
                {"id":"yPMkTfcT","block":"{\"symbols\":[\"option\"],\"statements\":[[2,\"\\n      \"],[8,\"denali-select\",[],[[\"@options\",\"@isInverse\"],[[32,0,[\"options\"]],[32,0,[\"isInverse\"]]]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[1,[32,1,[\"text\"]]],[2,\"\\n      \"]],\"parameters\":[1]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 3:
                this.set('options', opts);
                assert.dom('div.input').doesNotHaveClass('is-inverse', 'DenaliSelect does not have inverse styling by default');
                this.set('isInverse', 'true');
                assert.dom('div.input').hasClass('is-inverse', 'DenaliSelect has inverse styling when `@isInverse` arg is set to true');

              case 7:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      return function (_x8) {
        return _ref10.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it handles change events', /*#__PURE__*/function () {
      var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(assert) {
        var _this = this;

        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                assert.expect(2);
                _context9.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliSelect
                        @options={{this.options}}
                        @selectedOption={{this.selectedOption}}
                        @disabledOptions={{this.disabled}}
                        @onChange={{this.onChange}} as |option|>
                        {{option.text}}
                      </DenaliSelect>
                    
                */
                {"id":"Cb0RRDlU","block":"{\"symbols\":[\"option\"],\"statements\":[[2,\"\\n      \"],[8,\"denali-select\",[],[[\"@options\",\"@selectedOption\",\"@disabledOptions\",\"@onChange\"],[[32,0,[\"options\"]],[32,0,[\"selectedOption\"]],[32,0,[\"disabled\"]],[32,0,[\"onChange\"]]]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[1,[32,1,[\"text\"]]],[2,\"\\n      \"]],\"parameters\":[1]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 3:
                this.set('options', [{
                  text: 'Item 1'
                }, {
                  text: 'Item 2'
                }, {
                  text: 'Item 3'
                }]);
                this.set('selectedOption', this.options[2]);
                assert.equal((0, _testHelpers.find)('div.input select').selectedIndex, 2);
                this.set('onChange', function (option) {
                  _this.set('selectedOption', option);

                  assert.equal(option, _this.options[1], 'DenaliSelect @onChange action provides the object selected');
                });
                _context9.next = 9;
                return (0, _testHelpers.fillIn)('div.input select', 'Item 2');

              case 9:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      return function (_x9) {
        return _ref11.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/integration/components/denali-sidebar-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | denali-sidebar', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliSidebar>
                        The Greatest Sidebar
                      </DenaliSidebar>
                    
                */
                {"id":"sYesis36","block":"{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"denali-sidebar\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        The Greatest Sidebar\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 2:
                assert.dom('.tabs').hasClass('is-primary', 'DenaliSidebar renders a primary style by default');
                assert.dom('.tabs').hasClass('is-vertical', 'DenaliSidebar renders a vertical style by default');

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it can yield a `Tab` sub component', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliSidebar as |Sidebar|>
                        <Sidebar.Tab>
                          The Greatest Tab
                        </Sidebar.Tab>
                      </DenaliSidebar>
                    
                */
                {"id":"hm5QyUdq","block":"{\"symbols\":[\"Sidebar\"],\"statements\":[[2,\"\\n      \"],[8,\"denali-sidebar\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[8,[32,1,[\"Tab\"]],[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n          The Greatest Tab\\n        \"]],\"parameters\":[]}]]],[2,\"\\n      \"]],\"parameters\":[1]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 2:
                assert.dom('.tabs li span').hasText('The Greatest Tab', 'DenaliSidebar can yield a `Tab` sub component');

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it can yield a `LinkToTab` sub component', /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliSidebar as |Sidebar|>
                        <Sidebar.LinkToTab
                          @route="index"
                        >
                          The Greatest Tab
                        </Sidebar.LinkToTab>
                      </DenaliSidebar>
                    
                */
                {"id":"b8jt/5BG","block":"{\"symbols\":[\"Sidebar\"],\"statements\":[[2,\"\\n      \"],[8,\"denali-sidebar\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[8,[32,1,[\"LinkToTab\"]],[],[[\"@route\"],[\"index\"]],[[\"default\"],[{\"statements\":[[2,\"\\n          The Greatest Tab\\n        \"]],\"parameters\":[]}]]],[2,\"\\n      \"]],\"parameters\":[1]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 2:
                assert.dom('.tabs li.ember-view a').hasText('The Greatest Tab', 'DenaliSidebar can yield a `LinkToTab` sub component');

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/integration/components/denali-switch-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | denali-switch', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                assert.expect(4);
                _context.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <DenaliSwitch @offLabel="Lights Off" @onLabel="Lights On" />
                */
                {"id":"BBXzTEzD","block":"{\"symbols\":[],\"statements\":[[8,\"denali-switch\",[],[[\"@offLabel\",\"@onLabel\"],[\"Lights Off\",\"Lights On\"]],null]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 3:
                assert.dom('.denali-switch.switch').exists('A denali switch component is rendered');
                assert.dom('.denali-switch.switch .label.off').hasText('Lights Off', 'A denali switch renders an off label');
                assert.dom('.denali-switch.switch .label.on').hasText('Lights On', 'A denali switch renders an on label');
                assert.dom('.denali-switch.switch input').isNotChecked('The switch is off by default');

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('checked and disabled', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                assert.expect(4);
                _context2.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <DenaliSwitch
                      @offLabel="Off"
                      @onLabel="On"
                      checked={{this.checked}}
                      disabled={{this.disabled}}
                    />
                */
                {"id":"mkllDfCy","block":"{\"symbols\":[],\"statements\":[[8,\"denali-switch\",[[16,\"checked\",[32,0,[\"checked\"]]],[16,\"disabled\",[32,0,[\"disabled\"]]]],[[\"@offLabel\",\"@onLabel\"],[\"Off\",\"On\"]],null]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 3:
                assert.dom('.denali-switch.switch input').isNotChecked('The switch is off by default');
                this.set('checked', true);
                assert.dom('.denali-switch.switch input').isChecked('The switch is on when checked is set to true');
                assert.dom('.denali-switch.switch input').isNotDisabled('The switch is not disabled by default');
                this.set('disabled', true);
                assert.dom('.denali-switch.switch input').isDisabled('The switch is disabled when disabled is set to true');

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('isEnabled and isDisabled', /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                assert.expect(4);
                _context3.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <DenaliSwitch
                      @offLabel="Off"
                      @onLabel="On"
                      @isEnabled={{this.isEnabled}}
                      @isDisabled={{this.isDisabled}}
                    />
                */
                {"id":"bTgbtKaW","block":"{\"symbols\":[],\"statements\":[[8,\"denali-switch\",[],[[\"@offLabel\",\"@onLabel\",\"@isEnabled\",\"@isDisabled\"],[\"Off\",\"On\",[32,0,[\"isEnabled\"]],[32,0,[\"isDisabled\"]]]],null]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 3:
                assert.dom('.denali-switch.switch input').isNotChecked('The switch is off by default');
                this.set('isEnabled', true);
                assert.dom('.denali-switch.switch input').isChecked('The switch is on when isEnabled is set to true');
                assert.dom('.denali-switch.switch input').isNotDisabled('The switch is not disabled by default');
                this.set('isDisabled', true);
                assert.dom('.denali-switch.switch input').isDisabled('The switch is disabled when isDisabled is set to true');

              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('click and onChange action', /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(assert) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                assert.expect(7);
                this.set('clickHandler', function () {
                  assert.ok('Click handler is called on click');
                });
                this.set('changeHandler', function () {
                  assert.ok('Change handler is called on click');
                });
                _context4.next = 5;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <DenaliSwitch
                      @offLabel="Off"
                      @onLabel="On"
                      @onChange={{action this.changeHandler}}
                      {{on "click" (action this.clickHandler)}}
                    />
                */
                {"id":"zO3sOH/Q","block":"{\"symbols\":[],\"statements\":[[8,\"denali-switch\",[[4,[38,1],[\"click\",[30,[36,0],[[32,0],[32,0,[\"clickHandler\"]]],null]],null]],[[\"@offLabel\",\"@onLabel\",\"@onChange\"],[\"Off\",\"On\",[30,[36,0],[[32,0],[32,0,[\"changeHandler\"]]],null]]],null]],\"hasEval\":false,\"upvars\":[\"action\",\"on\"]}","moduleName":"(unknown template module)"}));

              case 5:
                assert.dom('.denali-switch.switch input').isNotChecked('The switch is off by default');
                _context4.next = 8;
                return (0, _testHelpers.click)('.denali-switch input');

              case 8:
                assert.dom('.denali-switch.switch input').isChecked('The switch is on after click');
                _context4.next = 11;
                return (0, _testHelpers.click)('.denali-switch input');

              case 11:
                assert.dom('.denali-switch.switch input').isNotChecked('Clicking again turns the switch off');

              case 12:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function (_x4) {
        return _ref5.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/integration/components/denali-tabs-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | denali-tabs', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliTabs>
                        Inner Content
                      </DenaliTabs>
                    
                */
                {"id":"8GrCXuaL","block":"{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"denali-tabs\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        Inner Content\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 2:
                assert.dom('div.tabs ul').hasText('Inner Content', 'DenaliTabs exists and renders inner content');

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it supports styles', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliTabs
                        @style={{this.style}}
                      >
                        Inner Content
                      </DenaliTabs>
                    
                */
                {"id":"zYyb4j5y","block":"{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"denali-tabs\",[],[[\"@style\"],[[32,0,[\"style\"]]]],[[\"default\"],[{\"statements\":[[2,\"\\n        Inner Content\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 2:
                assert.dom('.tabs').hasClass('is-primary', 'DenaliTabs renders a primary style by default');
                assert.dom('.tabs').hasClass('is-horizontal', 'DenaliTabs renders a horizontal style by default');
                this.set('style', 'secondary');
                assert.dom('.tabs').hasClass('is-secondary', 'DenaliTabs renders a secondary style by setting `@style` arg to secondary');
                assert.dom('.tabs').hasClass('is-horizontal', 'DenaliTabs renders a horizontal style by setting `@style` arg to secondary');

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it can yield a `Tab` sub component', /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliTabs as |Tabs|>
                        <Tabs.Tab>
                          The Greatest Tab
                        </Tabs.Tab>
                      </DenaliTabs>
                    
                */
                {"id":"k6o/df4O","block":"{\"symbols\":[\"Tabs\"],\"statements\":[[2,\"\\n      \"],[8,\"denali-tabs\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[8,[32,1,[\"Tab\"]],[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n          The Greatest Tab\\n        \"]],\"parameters\":[]}]]],[2,\"\\n      \"]],\"parameters\":[1]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 2:
                assert.dom('.tabs li span').hasText('The Greatest Tab', 'DenaliTabs can yield a `Tab` sub component');

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it can yield a `LinkToTab` sub component', /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(assert) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliTabs as |Tabs|>
                        <Tabs.LinkToTab
                          @route="index"
                        >
                          The Greatest Tab
                        </Tabs.LinkToTab>
                      </DenaliTabs>
                    
                */
                {"id":"t+uQK36L","block":"{\"symbols\":[\"Tabs\"],\"statements\":[[2,\"\\n      \"],[8,\"denali-tabs\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[8,[32,1,[\"LinkToTab\"]],[],[[\"@route\"],[\"index\"]],[[\"default\"],[{\"statements\":[[2,\"\\n          The Greatest Tab\\n        \"]],\"parameters\":[]}]]],[2,\"\\n      \"]],\"parameters\":[1]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 2:
                assert.dom('.tabs li.ember-view a').hasText('The Greatest Tab', 'DenaliTabs can yield a `LinkToTab` sub component');

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function (_x4) {
        return _ref5.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/integration/components/denali-tabs/link-to-tab-test", ["qunit", "ember-qunit", "@ember/test-helpers", "dummy/tests/helpers/setup-router"], function (_qunit, _emberQunit, _testHelpers, _setupRouter) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | denali-tabs/link-to-tab', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _setupRouter.default)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliTabs::LinkToTab
                        @route="four-oh-four"
                      >
                        Inner Content
                      </DenaliTabs::LinkToTab>
                    
                */
                {"id":"JqgaWIBS","block":"{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"denali-tabs/link-to-tab\",[],[[\"@route\"],[\"four-oh-four\"]],[[\"default\"],[{\"statements\":[[2,\"\\n        Inner Content\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 2:
                assert.dom('li a').hasText('Inner Content', 'DenaliTabs::LinkToTab exists and renders Inner Content');
                assert.dom('li a').hasAttribute('href', '/four-oh-four', 'DenaliTabs::LinkToTab has correct href attribute for given LinkTo arg');

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it can be set active', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.set('route', 'four-oh-four');
                _context2.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliTabs::LinkToTab
                        @route={{this.route}}
                      >
                        Inner Content
                      </DenaliTabs::LinkToTab>
                    
                */
                {"id":"+CAaKw1b","block":"{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"denali-tabs/link-to-tab\",[],[[\"@route\"],[[32,0,[\"route\"]]]],[[\"default\"],[{\"statements\":[[2,\"\\n        Inner Content\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 3:
                assert.dom('li').doesNotHaveClass('is-active', 'DenaliTabs::LinkToTab is not active when not on the current route');
                this.set('route', 'index');
                assert.dom('li').hasClass('is-active', 'DenaliTabs::LinkToTab is active when on the current route');

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it can be set disabled', /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliTabs::LinkToTab
                        @route="four-oh-four"
                        @disabled={{this.disabled}}
                      >
                        Inner Content
                      </DenaliTabs::LinkToTab>
                    
                */
                {"id":"/47hJNk9","block":"{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"denali-tabs/link-to-tab\",[],[[\"@route\",\"@disabled\"],[\"four-oh-four\",[32,0,[\"disabled\"]]]],[[\"default\"],[{\"statements\":[[2,\"\\n        Inner Content\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 2:
                assert.dom('li').doesNotHaveClass('is-disabled', 'DenaliTabs::LinkToTab is not disabled by default');
                this.set('disabled', true);
                assert.dom('li').hasClass('is-disabled', 'DenaliTabs::LinkToTab is disabled when disabled is set to true');

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/integration/components/denali-tabs/tab-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | denali-tabs/tab', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliTabs::Tab>
                        Inner Content
                      </DenaliTabs::Tab>
                    
                */
                {"id":"aPa6o0z5","block":"{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"denali-tabs/tab\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        Inner Content\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 2:
                assert.dom('li span').hasText('Inner Content', 'DenaliTabs::Tab exists and renders inner content');

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it can be set active', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliTabs::Tab
                        @isActive={{this.isActive}}
                      >
                        Inner Content
                      </DenaliTabs::Tab>
                    
                */
                {"id":"fB4GtIQK","block":"{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"denali-tabs/tab\",[],[[\"@isActive\"],[[32,0,[\"isActive\"]]]],[[\"default\"],[{\"statements\":[[2,\"\\n        Inner Content\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 2:
                assert.dom('li').doesNotHaveClass('is-active', 'DenaliTabs::Tab is not active by default');
                this.set('isActive', true);
                assert.dom('li').hasClass('is-active', 'DenaliTabs::Tab is active when setting `@isActive` arg to true');

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it can be set disabled', /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliTabs::Tab
                        @isDisabled={{this.isDisabled}}
                      >
                        Inner Content
                      </DenaliTabs::Tab>
                    
                */
                {"id":"RfSZQ4fd","block":"{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"denali-tabs/tab\",[],[[\"@isDisabled\"],[[32,0,[\"isDisabled\"]]]],[[\"default\"],[{\"statements\":[[2,\"\\n        Inner Content\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 2:
                assert.dom('li').doesNotHaveClass('is-disabled', 'DenaliTabs::Tab is not disabled by default');
                this.set('isDisabled', true);
                assert.dom('li').hasClass('is-disabled', 'DenaliTabs::Tab is active when setting `@isDisabled` arg to true');

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/integration/components/denali-tag-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | denali-tag', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliTag>
                        Inner Content
                      </DenaliTag>
                    
                */
                {"id":"VrhRTLaM","block":"{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"denali-tag\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        Inner Content\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 2:
                assert.dom('span.tag').hasText('Inner Content', 'DenaliTag exists and renders inner content');

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('states', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliTag @state={{this.state}}>
                        Inner Content
                      </DenaliTag>
                    
                */
                {"id":"6I9Rb/w2","block":"{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"denali-tag\",[],[[\"@state\"],[[32,0,[\"state\"]]]],[[\"default\"],[{\"statements\":[[2,\"\\n        Inner Content\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 2:
                assert.dom('span.tag').exists('DenaliTag can render without a state set');
                this.set('state', 'disabled');
                assert.dom('span.tag').hasClass('is-disabled', 'DenaliTag can be set disabled by setting the `@state` arg to `disabled`');
                this.set('state', 'active');
                assert.dom('span.tag').hasClass('is-active', 'DenaliTag can be set active by setting the `@state` arg to `active`');

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('outlined', /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliTag @isOutlined={{this.outlined}}>
                        Inner Content
                      </DenaliTag>
                    
                */
                {"id":"0KygeDDq","block":"{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"denali-tag\",[],[[\"@isOutlined\"],[[32,0,[\"outlined\"]]]],[[\"default\"],[{\"statements\":[[2,\"\\n        Inner Content\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 2:
                assert.dom('span.tag').doesNotHaveClass('outlined', 'DenaliTag is not outlined by default');
                this.set('outlined', true);
                assert.dom('span.tag').hasClass('outlined', 'DenaliTag can be outlined by setting the `@isOutlined` arg to true');

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('small', /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(assert) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliTag @isSmall={{this.isSmall}}>
                        Inner Content
                      </DenaliTag>
                    
                */
                {"id":"gTsnXJyg","block":"{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"denali-tag\",[],[[\"@isSmall\"],[[32,0,[\"isSmall\"]]]],[[\"default\"],[{\"statements\":[[2,\"\\n        Inner Content\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 2:
                assert.dom('span.tag').doesNotHaveClass('is-small', 'DenaliTag is not small by default');
                this.set('isSmall', true);
                assert.dom('span.tag').hasClass('is-small', 'DenaliTag can be made smaller by setting the `@isSmall` arg to true');

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function (_x4) {
        return _ref5.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('icons', /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(assert) {
        var iconFrontClass, iconBackClass;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                assert.expect(12);
                _context5.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliTag
                        @iconFront={{this.iconFront}}
                        @iconFrontClass={{this.iconFrontClass}}
                        @onIconFrontClick={{this.onIconFrontClick}}
                        @iconBack={{this.iconBack}}
                        @iconBackClass={{this.iconBackClass}}
                        @onIconBackClick={{this.onIconBackClick}}
                      >Tag Content</DenaliTag>
                    
                */
                {"id":"TiwopR06","block":"{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"denali-tag\",[],[[\"@iconFront\",\"@iconFrontClass\",\"@onIconFrontClick\",\"@iconBack\",\"@iconBackClass\",\"@onIconBackClick\"],[[32,0,[\"iconFront\"]],[32,0,[\"iconFrontClass\"]],[32,0,[\"onIconFrontClick\"]],[32,0,[\"iconBack\"]],[32,0,[\"iconBackClass\"]],[32,0,[\"onIconBackClick\"]]]],[[\"default\"],[{\"statements\":[[2,\"Tag Content\"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 3:
                assert.dom('span.tag').doesNotHaveClass('has-icon-front', 'DenaliTag does not have the `has-icon-front` class by default');
                assert.dom('span.tag').doesNotHaveClass('has-icon-back', 'DenaliTag does not have the `has-icon-back` class by default');
                this.set('iconFront', 'check');
                assert.dom('span.tag').hasClass('has-icon-front', 'DenaliTag has the `has-icon-front` class when iconFront is specified');
                assert.dom('span.tag .d-icon').hasClass('d-check', 'DenaliTag has the specified icon in the front');
                iconFrontClass = 'iconFrontClass';
                assert.dom('span.tag .d-icon').doesNotHaveClass(iconFrontClass, 'DenaliTag does not have `iconFrontClass` class by default');
                this.set('iconFrontClass', iconFrontClass);
                assert.dom('span.tag .d-check').hasClass(iconFrontClass, 'DenaliTag has the specified `iconFrontClass`');
                this.set('onIconFrontClick', function () {
                  return assert.ok(true, '`onIconFrontClick` fires on click');
                });
                _context5.next = 15;
                return (0, _testHelpers.click)('.d-check');

              case 15:
                // unset the front icon to check the back icon
                this.set('iconFront', undefined);
                this.set('onIconFrontClick', undefined);
                this.set('iconBack', 'close');
                assert.dom('span.tag').hasClass('has-icon-back', 'DenaliTag has the `has-icon-back` class when iconBack is specified');
                assert.dom('span.tag .d-icon').hasClass('d-close', 'DenaliTag has the specified icon in the back');
                iconBackClass = 'iconBackClass';
                assert.dom('span.tag .d-close').doesNotHaveClass(iconBackClass, 'DenaliTag does not have `iconBackClass` class by default');
                this.set('iconBackClass', iconBackClass);
                assert.dom('span.tag .d-icon').hasClass(iconBackClass, 'DenaliTag has the specified `iconBackClass`');
                this.set('onIconBackClick', function () {
                  return assert.ok(true, '`onIconBackClick` fires on click');
                });
                _context5.next = 27;
                return (0, _testHelpers.click)('.d-close');

              case 27:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      return function (_x5) {
        return _ref6.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/integration/components/denali-text-area-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | denali-text-area', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                assert.expect(3);
                _context.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <DenaliTextArea>My Input</ DenaliTextArea>
                */
                {"id":"T96wn7Vi","block":"{\"symbols\":[],\"statements\":[[8,\"denali-text-area\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"My Input\"]],\"parameters\":[]}]]]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 3:
                assert.dom('.input textarea').exists('An textarea is rendered within a wrapper div with class `.input`');
                assert.dom('.input textarea').isNotDisabled('The textarea is not disabled by default');
                assert.dom('.input textarea').hasValue('My Input', 'The textarea has the specified value');

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('states', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                assert.expect(2);
                _context2.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <DenaliTextArea @state={{this.state}} @errorMsg="error"/>
                */
                {"id":"2IRFr3MD","block":"{\"symbols\":[],\"statements\":[[8,\"denali-text-area\",[],[[\"@state\",\"@errorMsg\"],[[32,0,[\"state\"]],\"error\"]],null]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 3:
                this.set('state', 'active');
                assert.dom('.input').hasClass('is-active', 'The input wrapper has the appropriate class for active');
                this.set('state', 'error');
                assert.dom('.input').hasClass('is-error', 'The input wrapper has the appropriate class for error');

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('disabled', /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                assert.expect(1);
                _context3.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <DenaliTextArea disabled={{true}}/>
                */
                {"id":"MuNu47VT","block":"{\"symbols\":[],\"statements\":[[8,\"denali-text-area\",[[16,\"disabled\",true]],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 3:
                assert.dom('.input textarea').isDisabled('The textarea is disabled when specified');

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('placeholder', /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(assert) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                assert.expect(1);
                _context4.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <DenaliTextArea placeholder="Text field"/>
                */
                {"id":"UFv6MSlF","block":"{\"symbols\":[],\"statements\":[[8,\"denali-text-area\",[[24,\"placeholder\",\"Text field\"]],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 3:
                assert.dom('.input textarea').hasAttribute('placeholder', 'Text field', 'The textarea is has the specified placeholder');

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function (_x4) {
        return _ref5.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('error message', /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(assert) {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                assert.expect(2);
                _context5.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <DenaliTextArea @state="error" @errorMsg={{this.errorMsg}} />
                */
                {"id":"Pn2trf9F","block":"{\"symbols\":[],\"statements\":[[8,\"denali-text-area\",[],[[\"@state\",\"@errorMsg\"],[\"error\",[32,0,[\"errorMsg\"]]]],null]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 3:
                assert.dom('.input').hasClass('is-error', 'The input wrapper has the appropriate class.');
                this.set('errorMsg', 'Email Invalid');
                assert.dom('.input.is-error .message').hasText('Email Invalid', 'The specified error message is rendered');

              case 6:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      return function (_x5) {
        return _ref6.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('actions', /*#__PURE__*/function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(assert) {
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                assert.expect(2);
                this.set('handleInput', function (event) {
                  assert.equal(event.target.value, 'Random Text', 'the action passed in configured correctly');
                });
                _context6.next = 4;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <DenaliTextArea {{on 'input' this.handleInput}} />
                */
                {"id":"KQNpnJLn","block":"{\"symbols\":[],\"statements\":[[8,\"denali-text-area\",[[4,[38,0],[\"input\",[32,0,[\"handleInput\"]]],null]],[[],[]],null]],\"hasEval\":false,\"upvars\":[\"on\"]}","moduleName":"(unknown template module)"}));

              case 4:
                _context6.next = 6;
                return (0, _testHelpers.fillIn)('.input textarea', 'Random Text');

              case 6:
                this.set('handleInput', function (event) {
                  assert.equal(event.target.value, 'More Random Text', 'the action is configured correctly');
                });
                this.element.querySelector('.input textarea').value = 'More Random Text';
                this.element.querySelector('.input textarea').dispatchEvent(new Event('input'));

              case 9:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      return function (_x6) {
        return _ref7.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/integration/components/denali-title-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | denali-title', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <DenaliTitle />
                */
                {"id":"RxP/umDd","block":"{\"symbols\":[],\"statements\":[[8,\"denali-title\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 2:
                assert.dom('div.title').exists('DenaliTitle can render.');

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it renders with a title argument', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <DenaliTitle @title={{this.title}} />
                */
                {"id":"Hbt0+6im","block":"{\"symbols\":[],\"statements\":[[8,\"denali-title\",[],[[\"@title\"],[[32,0,[\"title\"]]]],null]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 2:
                this.set('title', 'My Title');
                assert.dom('span').hasClass('bar', 'DenaliTitle has a bar.');
                assert.dom('div.title-text').exists('DenaliTitle has a title-text class.');
                assert.dom('h3').hasTextContaining('My Title', 'DenaliTitle renders a title using an argument.');

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it renders with a caption argument', /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <DenaliTitle @title={{this.title}} @caption={{this.caption}} />
                */
                {"id":"wVpajrE5","block":"{\"symbols\":[],\"statements\":[[8,\"denali-title\",[],[[\"@title\",\"@caption\"],[[32,0,[\"title\"]],[32,0,[\"caption\"]]]],null]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 2:
                this.set('caption', 'My Caption');
                assert.dom('h6').doesNotExist('DenaliTitle does not render a caption without a title.');
                this.set('title', 'My Title');
                assert.dom('h6').hasTextContaining('My Caption', 'DenaliTitle renders a caption using an argument.');

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it renders with block components', /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(assert) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliTitle as |Title|>
                        <Title.h1>
                          {{this.h1}}
                        </Title.h1>
                        <Title.h2>
                          {{this.h2}}
                        </Title.h2>
                        <Title.h3>
                          {{this.h3}}
                        </Title.h3>
                        <Title.h4>
                          {{this.h4}}
                        </Title.h4>
                        <Title.h5>
                          {{this.h5}}
                        </Title.h5>
                        <Title.h6>
                          {{this.h6}}
                        </Title.h6>
                      </DenaliTitle>
                    
                */
                {"id":"ES89huP8","block":"{\"symbols\":[\"Title\"],\"statements\":[[2,\"\\n      \"],[8,\"denali-title\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[8,[32,1,[\"h1\"]],[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n          \"],[1,[32,0,[\"h1\"]]],[2,\"\\n        \"]],\"parameters\":[]}]]],[2,\"\\n        \"],[8,[32,1,[\"h2\"]],[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n          \"],[1,[32,0,[\"h2\"]]],[2,\"\\n        \"]],\"parameters\":[]}]]],[2,\"\\n        \"],[8,[32,1,[\"h3\"]],[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n          \"],[1,[32,0,[\"h3\"]]],[2,\"\\n        \"]],\"parameters\":[]}]]],[2,\"\\n        \"],[8,[32,1,[\"h4\"]],[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n          \"],[1,[32,0,[\"h4\"]]],[2,\"\\n        \"]],\"parameters\":[]}]]],[2,\"\\n        \"],[8,[32,1,[\"h5\"]],[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n          \"],[1,[32,0,[\"h5\"]]],[2,\"\\n        \"]],\"parameters\":[]}]]],[2,\"\\n        \"],[8,[32,1,[\"h6\"]],[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n          \"],[1,[32,0,[\"h6\"]]],[2,\"\\n        \"]],\"parameters\":[]}]]],[2,\"\\n      \"]],\"parameters\":[1]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 2:
                this.set('h1', 'My H1');
                assert.dom('h1').hasText('My H1', 'DenaliTitle renders block content for h1.');
                this.set('h2', 'My H2');
                assert.dom('h2').hasText('My H2', 'DenaliTitle renders block content for h2.');
                this.set('h3', 'My H3');
                assert.dom('h3').hasText('My H3', 'DenaliTitle renders block content for h3.');
                this.set('h4', 'My H4');
                assert.dom('h4').hasText('My H4', 'DenaliTitle renders block content for h4.');
                this.set('h5', 'My H5');
                assert.dom('h5').hasText('My H5', 'DenaliTitle renders block content for h5.');
                this.set('h6', 'My H6');
                assert.dom('h6').hasText('My H6', 'DenaliTitle renders block content for h6.');

              case 14:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function (_x4) {
        return _ref5.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it supports a wide bar', /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(assert) {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliTitle @hasWideBar={{this.hasWideBar}} as |Title|>
                        <Title.h1>
                          {{this.title}}
                        </Title.h1>
                        <Title.Caption>
                          {{this.caption}}
                        </Title.Caption>
                      </DenaliTitle>
                    
                */
                {"id":"J9sZLfJZ","block":"{\"symbols\":[\"Title\"],\"statements\":[[2,\"\\n      \"],[8,\"denali-title\",[],[[\"@hasWideBar\"],[[32,0,[\"hasWideBar\"]]]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[8,[32,1,[\"h1\"]],[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n          \"],[1,[32,0,[\"title\"]]],[2,\"\\n        \"]],\"parameters\":[]}]]],[2,\"\\n        \"],[8,[32,1,[\"Caption\"]],[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n          \"],[1,[32,0,[\"caption\"]]],[2,\"\\n        \"]],\"parameters\":[]}]]],[2,\"\\n      \"]],\"parameters\":[1]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 2:
                this.set('hasWideBar', true);
                assert.dom('span.bar').hasClass('is-wide', 'DenaliTitle has a wide bar.');

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      return function (_x5) {
        return _ref6.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it supports statuses for bar', /*#__PURE__*/function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(assert) {
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliTitle @backgroundStatus={{this.backgroundStatus}} />
                    
                */
                {"id":"ZHX4VY2e","block":"{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"denali-title\",[],[[\"@backgroundStatus\"],[[32,0,[\"backgroundStatus\"]]]],null],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 2:
                assert.dom('span.bar').exists('DenaliTitle can render without a backgroundStatus set');
                this.set('backgroundStatus', 'danger');
                assert.dom('span.bar').hasClass('has-bg-status-danger', 'DenaliTitle has background status of danger when `@backgroundStatus` arg is set to danger');
                this.set('backgroundStatus', 'warning');
                assert.dom('span.bar').hasClass('has-bg-status-warning', 'DenaliTitle has background status of warning when `@backgroundStatus` arg is set to warning');
                this.set('backgroundStatus', 'success');
                assert.dom('span.bar').hasClass('has-bg-status-success', 'DenaliTitle has background status of success when `@backgroundStatus` arg is set to success');
                this.set('backgroundStatus', 'info');
                assert.dom('span.bar').hasClass('has-bg-status-info', 'DenaliTitle has background status of info when `@backgroundStatus` arg is set to info');

              case 11:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      return function (_x6) {
        return _ref7.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/integration/components/denali-title/heading-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  var templates = Object.entries({
    h1: Ember.HTMLBars.template(
    /*
      
        <DenaliTitle::H1 @isRegular={{this.isRegular}} @isUpperCase={{this.isUpperCase}} @status={{this.status}}>
          {{this.title}}
        </DenaliTitle::H1>
      
    */
    {"id":"8A5shuzz","block":"{\"symbols\":[],\"statements\":[[2,\"\\n    \"],[8,\"denali-title/h1\",[],[[\"@isRegular\",\"@isUpperCase\",\"@status\"],[[32,0,[\"isRegular\"]],[32,0,[\"isUpperCase\"]],[32,0,[\"status\"]]]],[[\"default\"],[{\"statements\":[[2,\"\\n      \"],[1,[32,0,[\"title\"]]],[2,\"\\n    \"]],\"parameters\":[]}]]],[2,\"\\n  \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}),
    h2: Ember.HTMLBars.template(
    /*
      
        <DenaliTitle::H2 @isRegular={{this.isRegular}} @isUpperCase={{this.isUpperCase}} @status={{this.status}}>
          {{this.title}}
        </DenaliTitle::H2>
      
    */
    {"id":"m1Qo2A7H","block":"{\"symbols\":[],\"statements\":[[2,\"\\n    \"],[8,\"denali-title/h2\",[],[[\"@isRegular\",\"@isUpperCase\",\"@status\"],[[32,0,[\"isRegular\"]],[32,0,[\"isUpperCase\"]],[32,0,[\"status\"]]]],[[\"default\"],[{\"statements\":[[2,\"\\n      \"],[1,[32,0,[\"title\"]]],[2,\"\\n    \"]],\"parameters\":[]}]]],[2,\"\\n  \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}),
    h3: Ember.HTMLBars.template(
    /*
      
        <DenaliTitle::H3 @isRegular={{this.isRegular}} @isUpperCase={{this.isUpperCase}} @status={{this.status}}>
          {{this.title}}
        </DenaliTitle::H3>, 
      
    */
    {"id":"bGwfgjGF","block":"{\"symbols\":[],\"statements\":[[2,\"\\n    \"],[8,\"denali-title/h3\",[],[[\"@isRegular\",\"@isUpperCase\",\"@status\"],[[32,0,[\"isRegular\"]],[32,0,[\"isUpperCase\"]],[32,0,[\"status\"]]]],[[\"default\"],[{\"statements\":[[2,\"\\n      \"],[1,[32,0,[\"title\"]]],[2,\"\\n    \"]],\"parameters\":[]}]]],[2,\", \\n  \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}),
    h4: Ember.HTMLBars.template(
    /*
      
        <DenaliTitle::H4 @isRegular={{this.isRegular}} @isUpperCase={{this.isUpperCase}} @status={{this.status}}>
          {{this.title}}
        </DenaliTitle::H4>
      
    */
    {"id":"RHDfT9Fa","block":"{\"symbols\":[],\"statements\":[[2,\"\\n    \"],[8,\"denali-title/h4\",[],[[\"@isRegular\",\"@isUpperCase\",\"@status\"],[[32,0,[\"isRegular\"]],[32,0,[\"isUpperCase\"]],[32,0,[\"status\"]]]],[[\"default\"],[{\"statements\":[[2,\"\\n      \"],[1,[32,0,[\"title\"]]],[2,\"\\n    \"]],\"parameters\":[]}]]],[2,\"\\n  \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}),
    h5: Ember.HTMLBars.template(
    /*
      
        <DenaliTitle::H5 @isRegular={{this.isRegular}} @isUpperCase={{this.isUpperCase}} @status={{this.status}}>
          {{this.title}}
        </DenaliTitle::H5>
      
    */
    {"id":"PILsNBfM","block":"{\"symbols\":[],\"statements\":[[2,\"\\n    \"],[8,\"denali-title/h5\",[],[[\"@isRegular\",\"@isUpperCase\",\"@status\"],[[32,0,[\"isRegular\"]],[32,0,[\"isUpperCase\"]],[32,0,[\"status\"]]]],[[\"default\"],[{\"statements\":[[2,\"\\n      \"],[1,[32,0,[\"title\"]]],[2,\"\\n    \"]],\"parameters\":[]}]]],[2,\"\\n  \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}),
    h6: Ember.HTMLBars.template(
    /*
      
        <DenaliTitle::H6 @isRegular={{this.isRegular}} @isUpperCase={{this.isUpperCase}} @status={{this.status}}>
          {{this.title}}
        </DenaliTitle::H6>
      
    */
    {"id":"U6zBx+Vo","block":"{\"symbols\":[],\"statements\":[[2,\"\\n    \"],[8,\"denali-title/h6\",[],[[\"@isRegular\",\"@isUpperCase\",\"@status\"],[[32,0,[\"isRegular\"]],[32,0,[\"isUpperCase\"]],[32,0,[\"status\"]]]],[[\"default\"],[{\"statements\":[[2,\"\\n      \"],[1,[32,0,[\"title\"]]],[2,\"\\n    \"]],\"parameters\":[]}]]],[2,\"\\n  \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"})
  });
  (0, _qunit.module)('Integration | Component | denali-title/headings', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        var _iterator, _step, _step$value, heading, template;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _iterator = _createForOfIteratorHelper(templates);
                _context.prev = 1;

                _iterator.s();

              case 3:
                if ((_step = _iterator.n()).done) {
                  _context.next = 11;
                  break;
                }

                _step$value = _slicedToArray(_step.value, 2), heading = _step$value[0], template = _step$value[1];
                _context.next = 7;
                return (0, _testHelpers.render)(template);

              case 7:
                this.set('title', 'My Title');
                assert.dom(heading).hasText('My Title', "DenaliTitle::".concat(heading.toUpperCase(), " can render."));

              case 9:
                _context.next = 3;
                break;

              case 11:
                _context.next = 16;
                break;

              case 13:
                _context.prev = 13;
                _context.t0 = _context["catch"](1);

                _iterator.e(_context.t0);

              case 16:
                _context.prev = 16;

                _iterator.f();

                return _context.finish(16);

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 13, 16, 19]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it supports regular style', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        var _iterator2, _step2, _step2$value, heading, template;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _iterator2 = _createForOfIteratorHelper(templates);
                _context2.prev = 1;

                _iterator2.s();

              case 3:
                if ((_step2 = _iterator2.n()).done) {
                  _context2.next = 14;
                  break;
                }

                _step2$value = _slicedToArray(_step2.value, 2), heading = _step2$value[0], template = _step2$value[1];
                _context2.next = 7;
                return (0, _testHelpers.render)(template);

              case 7:
                this.set('title', 'My Title');
                this.set('isRegular', undefined);
                assert.dom(heading).doesNotHaveClass('is-regular', "Denali::".concat(heading.toUpperCase(), " does not have regular styling by default"));
                this.set('isRegular', 'true');
                assert.dom(heading).hasClass('is-regular', "Denali::".concat(heading.toUpperCase(), " has regular styling when @isRegular arg is set to true"));

              case 12:
                _context2.next = 3;
                break;

              case 14:
                _context2.next = 19;
                break;

              case 16:
                _context2.prev = 16;
                _context2.t0 = _context2["catch"](1);

                _iterator2.e(_context2.t0);

              case 19:
                _context2.prev = 19;

                _iterator2.f();

                return _context2.finish(19);

              case 22:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[1, 16, 19, 22]]);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it supports upper casing', /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
        var _iterator3, _step3, _step3$value, heading, template;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _iterator3 = _createForOfIteratorHelper(templates);
                _context3.prev = 1;

                _iterator3.s();

              case 3:
                if ((_step3 = _iterator3.n()).done) {
                  _context3.next = 14;
                  break;
                }

                _step3$value = _slicedToArray(_step3.value, 2), heading = _step3$value[0], template = _step3$value[1];
                _context3.next = 7;
                return (0, _testHelpers.render)(template);

              case 7:
                this.set('title', 'My Title');
                this.set('isUpperCase', undefined);
                assert.dom(heading).doesNotHaveClass('upper', "Denali::".concat(heading.toUpperCase(), " does not have upper case styling by default"));
                this.set('isUpperCase', 'true');
                assert.dom(heading).hasClass('upper', "Denali::".concat(heading.toUpperCase(), " has upper case styling when @isUpperCase arg is set to true"));

              case 12:
                _context3.next = 3;
                break;

              case 14:
                _context3.next = 19;
                break;

              case 16:
                _context3.prev = 16;
                _context3.t0 = _context3["catch"](1);

                _iterator3.e(_context3.t0);

              case 19:
                _context3.prev = 19;

                _iterator3.f();

                return _context3.finish(19);

              case 22:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[1, 16, 19, 22]]);
      }));

      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it supports statuses', /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(assert) {
        var _iterator4, _step4, _step4$value, heading, template;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _iterator4 = _createForOfIteratorHelper(templates);
                _context4.prev = 1;

                _iterator4.s();

              case 3:
                if ((_step4 = _iterator4.n()).done) {
                  _context4.next = 20;
                  break;
                }

                _step4$value = _slicedToArray(_step4.value, 2), heading = _step4$value[0], template = _step4$value[1];
                _context4.next = 7;
                return (0, _testHelpers.render)(template);

              case 7:
                this.set('title', 'My Title');
                this.set('status', undefined);
                assert.dom(heading).exists("DenaliTitle::".concat(heading.toUpperCase(), " can render without a status set"));
                this.set('status', 'danger');
                assert.dom(heading).hasClass('is-status-danger', "DenaliTitle::".concat(heading.toUpperCase(), " has status of danger when @status arg is set to danger"));
                this.set('status', 'warning');
                assert.dom(heading).hasClass('is-status-warning', "DenaliTitle::".concat(heading.toUpperCase(), " has status of warning when @status arg is set to warning"));
                this.set('status', 'success');
                assert.dom(heading).hasClass('is-status-success', "DenaliTitle::".concat(heading.toUpperCase(), " has status of success when @status arg is set to success"));
                this.set('status', 'info');
                assert.dom(heading).hasClass('is-status-info', "DenaliTitle::".concat(heading.toUpperCase(), " has status of info when @status arg is set to info"));

              case 18:
                _context4.next = 3;
                break;

              case 20:
                _context4.next = 25;
                break;

              case 22:
                _context4.prev = 22;
                _context4.t0 = _context4["catch"](1);

                _iterator4.e(_context4.t0);

              case 25:
                _context4.prev = 25;

                _iterator4.f();

                return _context4.finish(25);

              case 28:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[1, 22, 25, 28]]);
      }));

      return function (_x4) {
        return _ref5.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/integration/components/denali-toggle-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  var option = {
    text: 'Item 1'
  };
  (0, _qunit.module)('Integration | Component | denali-toggle', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it requires options', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                assert.expect(1);
                (0, _testHelpers.setupOnerror)(function (_ref3) {
                  var message = _ref3.message;
                  assert.equal(message, 'Failed prop type: The prop `options` is marked as required in `DenaliToggleComponent`, but its value is `undefined`.', 'If @args() contains a PropType validator, an error will be thrown if the value is incorrect');
                });
                _context.next = 4;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <DenaliToggle />
                */
                {"id":"gEfY1nFm","block":"{\"symbols\":[],\"statements\":[[8,\"denali-toggle\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it renders an option string', /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                assert.expect(2);
                _context2.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliToggle @options={{array "Item 1"}} as |option|>
                        {{option}}
                      </DenaliToggle>
                    
                */
                {"id":"YBSggxuj","block":"{\"symbols\":[\"option\"],\"statements\":[[2,\"\\n      \"],[8,\"denali-toggle\",[],[[\"@options\"],[[30,[36,0],[\"Item 1\"],null]]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[1,[32,1]],[2,\"\\n      \"]],\"parameters\":[1]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[\"array\"]}","moduleName":"(unknown template module)"}));

              case 3:
                assert.dom('ul').exists('DenaliToggle renders a list.');
                assert.dom('li').hasText('Item 1', 'DenaliToggle option exists and renders text.');

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x2) {
        return _ref4.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it renders an option object', /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                assert.expect(2);
                _context3.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliToggle @options={{array (hash text="Item 1")}} as |option|>
                        {{option.text}}
                      </DenaliToggle>
                    
                */
                {"id":"kPDouFX4","block":"{\"symbols\":[\"option\"],\"statements\":[[2,\"\\n      \"],[8,\"denali-toggle\",[],[[\"@options\"],[[30,[36,1],[[30,[36,0],null,[[\"text\"],[\"Item 1\"]]]],null]]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[1,[32,1,[\"text\"]]],[2,\"\\n      \"]],\"parameters\":[1]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[\"hash\",\"array\"]}","moduleName":"(unknown template module)"}));

              case 3:
                assert.dom('ul').exists('DenaliToggle renders a list.');
                assert.dom('li').hasText('Item 1', 'DenaliToggle option exists and renders an object.');

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x3) {
        return _ref5.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('an option is active', /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(assert) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                assert.expect(2);
                _context4.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliToggle @options={{this.options}} @activeOption={{this.activeOption}} as |option|>
                        {{option.text}}
                      </DenaliToggle>
                    
                */
                {"id":"lmylc6wM","block":"{\"symbols\":[\"option\"],\"statements\":[[2,\"\\n      \"],[8,\"denali-toggle\",[],[[\"@options\",\"@activeOption\"],[[32,0,[\"options\"]],[32,0,[\"activeOption\"]]]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[1,[32,1,[\"text\"]]],[2,\"\\n      \"]],\"parameters\":[1]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 3:
                this.set('options', [option]);
                assert.dom('li').doesNotHaveClass('is-active', 'DenaliToggle options are not active by default');
                this.set('activeOption', option);
                assert.dom('li').hasClass('is-active', 'DenaliToggle option is active when `@activeOption` arg is set');

              case 7:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function (_x4) {
        return _ref6.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('an option is disabled', /*#__PURE__*/function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(assert) {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                assert.expect(2);
                _context5.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliToggle @options={{this.options}} @disabledOptions={{this.disabled}} as |option|>
                        {{option.text}}
                      </DenaliToggle>
                    
                */
                {"id":"vk9X0+pk","block":"{\"symbols\":[\"option\"],\"statements\":[[2,\"\\n      \"],[8,\"denali-toggle\",[],[[\"@options\",\"@disabledOptions\"],[[32,0,[\"options\"]],[32,0,[\"disabled\"]]]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[1,[32,1,[\"text\"]]],[2,\"\\n      \"]],\"parameters\":[1]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 3:
                this.set('options', [option]);
                assert.dom('li').doesNotHaveClass('is-disabled', 'DenaliToggle options are not disabled by default');
                this.set('disabled', [option]);
                assert.dom('li').hasClass('is-disabled', 'DenaliToggle option is disabled when `@isDisabled` arg is set to true');

              case 7:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      return function (_x5) {
        return _ref7.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it supports small size', /*#__PURE__*/function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(assert) {
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                assert.expect(2);
                _context6.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliToggle @options={{this.options}} @isSmall={{this.isSmall}} as |option|>
                        {{option.text}}
                      </DenaliToggle>
                    
                */
                {"id":"cBPGgQeP","block":"{\"symbols\":[\"option\"],\"statements\":[[2,\"\\n      \"],[8,\"denali-toggle\",[],[[\"@options\",\"@isSmall\"],[[32,0,[\"options\"]],[32,0,[\"isSmall\"]]]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[1,[32,1,[\"text\"]]],[2,\"\\n      \"]],\"parameters\":[1]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 3:
                this.set('options', [option]);
                assert.dom('.toggle').doesNotHaveClass('is-small', 'DenaliToggle does not have small styling by default');
                this.set('isSmall', 'true');
                assert.dom('.toggle').hasClass('is-small', 'DenaliToggle has a small size when `@isSmall` arg is set to true');

              case 7:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      return function (_x6) {
        return _ref8.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it supports inverse colors', /*#__PURE__*/function () {
      var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(assert) {
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                assert.expect(2);
                _context7.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliToggle @options={{this.options}} @isInverse={{this.isInverse}} as |option|>
                        {{option.text}}
                      </DenaliToggle>
                    
                */
                {"id":"Ct59macN","block":"{\"symbols\":[\"option\"],\"statements\":[[2,\"\\n      \"],[8,\"denali-toggle\",[],[[\"@options\",\"@isInverse\"],[[32,0,[\"options\"]],[32,0,[\"isInverse\"]]]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[1,[32,1,[\"text\"]]],[2,\"\\n      \"]],\"parameters\":[1]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 3:
                this.set('options', [option]);
                assert.dom('.toggle').doesNotHaveClass('is-inverse', 'DenaliToggle does not have inverse styling by default');
                this.set('isInverse', 'true');
                assert.dom('.toggle').hasClass('is-inverse', 'DenaliToggle has inverse styling when `@isInverse` arg is set to true');

              case 7:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      return function (_x7) {
        return _ref9.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it handles change events', /*#__PURE__*/function () {
      var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(assert) {
        var _this = this;

        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                assert.expect(4);
                _context8.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliToggle
                        @options={{this.options}}
                        @activeOption={{this.activeOption}}
                        @disabledOptions={{this.disabled}}
                        @onChange={{this.changeActive}} as |option|>
                        {{option.text}}
                      </DenaliToggle>
                    
                */
                {"id":"VPfYKTRw","block":"{\"symbols\":[\"option\"],\"statements\":[[2,\"\\n      \"],[8,\"denali-toggle\",[],[[\"@options\",\"@activeOption\",\"@disabledOptions\",\"@onChange\"],[[32,0,[\"options\"]],[32,0,[\"activeOption\"]],[32,0,[\"disabled\"]],[32,0,[\"changeActive\"]]]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[1,[32,1,[\"text\"]]],[2,\"\\n      \"]],\"parameters\":[1]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","moduleName":"(unknown template module)"}));

              case 3:
                this.set('options', [{
                  text: 'Item 1'
                }, {
                  text: 'Item 2'
                }, {
                  text: 'Item 3'
                }]);
                this.set('activeOption', this.options[2]);
                assert.dom('li:nth-child(3)').hasClass('is-active', 'The third option is active');
                this.set('changeActive', function (option) {
                  _this.set('activeOption', option);

                  assert.equal(option.text, 'Item 2', 'the second option is clicked');
                });
                _context8.next = 9;
                return (0, _testHelpers.click)('li:nth-child(2)');

              case 9:
                assert.dom('li:nth-child(2)').hasClass('is-active', 'The element is active after being clicked');
                this.set('disabled', [this.options[0]]);
                this.set('changeActive', function () {
                  assert.notOk(true, '`@onChange` should not be called when option is disabled');
                });
                _context8.next = 14;
                return (0, _testHelpers.click)('li:nth-child(1)');

              case 14:
                assert.dom('li:nth-child(2)').hasClass('is-active', 'The original element is still active after being clicked');

              case 15:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      return function (_x8) {
        return _ref10.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/test-helper", ["dummy/app", "dummy/config/environment", "qunit", "@ember/test-helpers", "qunit-dom", "ember-qunit"], function (_app, _environment, QUnit, _testHelpers, _qunitDom, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _qunitDom.setup)(QUnit.assert);
  (0, _emberQunit.start)();
});
define('dummy/config/environment', [], function() {
  var prefix = 'dummy';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('dummy/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
