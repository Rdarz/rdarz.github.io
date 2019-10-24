webpackJsonp([2],{

/***/ "./src/routes/Login/components/Login.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_toConsumableArray__ = __webpack_require__("./node_modules/babel-runtime/helpers/toConsumableArray.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_toConsumableArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prop_types__ = __webpack_require__("./node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_scss__ = __webpack_require__("./src/routes/Login/components/login.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__login_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__LoginSubComponent__ = __webpack_require__("./src/routes/Login/components/LoginSubComponent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils_constants__ = __webpack_require__("./src/utils/constants.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__utils_regex__ = __webpack_require__("./src/utils/regex.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react_router__ = __webpack_require__("./node_modules/react-router/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__images_config_images_json__ = __webpack_require__("./src/images/config/images.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__images_config_images_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__images_config_images_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__utils_ipinfo__ = __webpack_require__("./src/utils/ipinfo.js");

















var MainLogo = '../../../' + __WEBPACK_IMPORTED_MODULE_13_lodash___default.a.get(__WEBPACK_IMPORTED_MODULE_14__images_config_images_json___default.a, 'common.LOGO');
var activeOTPImg = '../../../' + __WEBPACK_IMPORTED_MODULE_13_lodash___default.a.get(__WEBPACK_IMPORTED_MODULE_14__images_config_images_json___default.a, 'common.ACTIVE_OTP');
var defOTPImg = '../../../' + __WEBPACK_IMPORTED_MODULE_13_lodash___default.a.get(__WEBPACK_IMPORTED_MODULE_14__images_config_images_json___default.a, 'common.OTP_IMAGE');

var Login = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(Login, _Component);

  function Login(props) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, Login);

    var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));

    _this.handleCountryChange = function (value) {
      if (value.CountryID !== _this.props.user.selectedCountryData.CountryID) {
        // call appConfig only when selected country has changed
        _this.setState({
          selectedCountryObj: value
        });
        _this.props.setSelectedCountryData(value);
        _this.props.setglobalLoaderStatus(true);
        _this.props.loadAppConfig().then(function () {
          _this.props.setglobalLoaderStatus(false);
        });
      }
    };

    _this.fetchOTPfunc = function (requestObj) {
      var viaResendOptn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      var reqObj = requestObj;
      console.log(_this.state.ResendOTPRequest);
      if (_this.state.ResendOTPRequest) {
        console.log('if', reqObj);
        reqObj = Object.assign({}, reqObj, {
          'ResendOTPRequest': true
        });
      } else {
        console.log('else', reqObj);

        reqObj = Object.assign({}, reqObj);
      }
      _this.props.generateOTPAsync(reqObj).then(function (data) {
        var _data$data = data.data,
            showReCaptcha = _data$data.sendCaptcha,
            _data$data$allowResen = _data$data.allowResend,
            allowResend = _data$data$allowResen === undefined ? true : _data$data$allowResen;

        if (allowResend) {
          _this.setState({
            allowResend: allowResend
          });
        }
        if (viaResendOptn) {
          // resend option set state execution
          if (requestObj.voiceOtp) {
            // for resend via call
            _this.setState({
              showCallTimer: true
            }, function () {
              window.otpViaCallFunc = setInterval(function () {
                if (_this.state.otpViaCallTimer === 0) {
                  clearInterval(window.otpViaCallFunc);
                  _this.setState({
                    otpViaCallTimer: 60,
                    showCallOptnBtn: true,
                    disableResendOtp: false
                  });
                } else {
                  _this.setState({
                    showCallOptnBtn: false,
                    otpViaCallTimer: _this.state.otpViaCallTimer - 1
                  });
                }
              }, 1000);
            });
          } else {
            // for resend via msg
            _this.setState({
              showOTPTimer: true
            }, function () {
              window.frequentCallsFunc = setInterval(function () {
                if (_this.state.frequentCalls === 1) {
                  clearInterval(window.frequentCallsFunc);
                  _this.setState({
                    frequentCalls: 60,
                    showResendOTPbtn: true,
                    disableResendOtp: false
                  });
                } else {
                  _this.setState({
                    showResendOTPbtn: false,
                    frequentCalls: _this.state.frequentCalls - 1
                  });
                }
              }, 1000);
            });
          }
        } else {
          _this.setState({
            showReCaptcha: showReCaptcha,
            BtnLoaderStatus: false,
            otpFetched: true,
            sendOTPCounter: 8,
            loginPageId: 'otp_page',
            setFocusOTP: true
          }, function () {
            window.sendOTPCounterFunc = setInterval(function () {
              // timer functions to display counters for enabling re-send options
              if (_this.state.sendOTPCounter === 1) {
                clearInterval(window.sendOTPCounterFunc);
                _this.setState({
                  sendOTPCounter: 0,
                  showResendOTPbtn: true,
                  showCallOptnBtn: true,
                  disableResendOtp: false
                });
              } else {
                _this.setState({
                  sendOTPCounter: _this.state.sendOTPCounter - 1
                });
              }
            }, 1000);
            if (_this.state.setFocusOTP && !viaResendOptn) {
              document.getElementById('otp-input').focus();
            }
          });
        }
      }).catch(function (err) {
        console.log(err);
        _this.setState({
          BtnLoaderStatus: false,
          disableResendOtp: false
        });
      });
    };

    _this.validatePhno = function () {
      if (_this.state.termsAndCondCheck) {
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11__utils_regex__["a" /* regexCheck */])('validation', 'numeric', _this.state.Phno, _this.state.phnoLengthAr)) {
          _this.setState({
            BtnLoaderStatus: true
          }, function () {
            _this.fetchOTPfunc({ MobileNo: _this.state.Phno }, false);
          });
        } else {
          _this.props.setToaster('Please enter a valid mobile no!!', 'error');
          _this.setState({
            Phno: ''
          });
        }
      }
    };

    _this.handlePhNoInputChange = function (e) {
      if (e.which === 13) {
        e.target.value && _this.state.phnoLengthAr.includes(e.target.value.length) && _this.validatePhno();
      } else {
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11__utils_regex__["a" /* regexCheck */])('onChange', 'numeric', e.target.value, Math.max.apply(Math, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_toConsumableArray___default()(_this.state.phnoLengthAr)))) {
          _this.setState({
            Phno: e.target.value
          });
        }
      }
    };

    _this.checkOTPlength = function (e) {
      if (e.which === 13) {
        e.target.value && e.target.value.length === 6 && _this.checkOTP();
      } else {
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11__utils_regex__["a" /* regexCheck */])('onChange', 'numeric', e.target.value, 6)) {
          _this.setState({
            otpValue: e.target.value
          });
        }
      }
    };

    _this.checkOTP = function () {
      if (!_this.state.BtnLoaderStatus && _this.state.otpValue) {
        _this.setState({
          BtnLoaderStatus: true
        }, function () {
          var reqBody = {};
          _this.state.recaptcha ? reqBody = {
            mobileno: _this.state.Phno,
            otp: _this.state.otpValue,
            recaptcha: _this.state.recaptcha
          } : reqBody = {
            mobileno: _this.state.Phno,
            otp: _this.state.otpValue
          };
          _this.verifyOTP(reqBody);
        });
      }
    };

    _this.verifyOTP = function (reqBody) {
      _this.props.verifyOTPAsync(reqBody).then(function (data) {
        console.log(data);
        if (data.sendCaptcha) {
          // window.grecaptcha
          //   ? window.grecaptcha.reset()
          // : ''
          window.grecaptcha && window.grecaptcha.reset();
          _this.setState({
            loginPageId: 'otp_page',
            showReCaptcha: true,
            otpValue: '',
            BtnLoaderStatus: false
          });
          _this.props.setToaster('Invalid OTP', 'error');
        } else if (data.isNew || !data.profileComplete) {
          _this.setState({
            loginPageId: 'new_usr'
          });
        } else {
          _this.props.getUserDetailsAsync({
            ConsumerID: _this.props.user.consumerDetails.data.ConsumerID,
            AuthID: _this.props.user.consumerDetails.data.accessToken.id
          }).then(function () {
            _this.setState({
              BtnLoaderStatus: false
            });
            _this.redirectionLink();
          }).catch(function (err) {
            console.log(err);
            __WEBPACK_IMPORTED_MODULE_12_react_router__["browserHistory"].replace('/');
          });
        }
      }).catch(function (err) {
        console.log(err.data);
        _this.setState({
          otpValue: '',
          BtnLoaderStatus: false
        });
      });
    };

    _this.ResendOtp = function () {
      console.log('resend OTP');
      _this.setState({
        otpValue: '',
        ResendOTPRequest: true
      }, function () {
        if (_this.state.frequentCalls === 60) {
          _this.fetchOTPfunc({ MobileNo: _this.state.Phno });
        }
      });
    };

    _this.handleOTPViaCall = function () {
      _this.setState({
        otpValue: '',
        ResendOTPRequest: true

      }, function () {
        if (_this.state.otpViaCallTimer === 60) {
          _this.fetchOTPfunc({ MobileNo: _this.state.Phno, voiceOtp: 1 });
        }
      });
    };

    _this.validateContactDetails = function () {
      var callApiStatus = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11__utils_regex__["a" /* regexCheck */])('validation', 'userName', _this.state.UsrName);
      if (__WEBPACK_IMPORTED_MODULE_13_lodash___default.a.get(_this, 'state.UsrEmailid', '').length) {
        callApiStatus = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11__utils_regex__["a" /* regexCheck */])('validation', 'emailId', _this.state.UsrEmailid) && callApiStatus;
      }
      if (callApiStatus) {
        // let date = new Date()
        _this.props.setglobalLoaderStatus(true);
        _this.props.updateUserDetailsAsync({
          AuthID: _this.props.user.consumerDetails.data.accessToken.id,
          data: Object.assign({}, _this.props.user.consumerDetails.data, {
            updateObj: {
              EmailID: _this.state.UsrEmailid,
              Name: _this.state.UsrName
            },
            CurrentDateTime: new Date().toISOString(),
            CouponCode: ''
          })
        }).then(function () {
          _this.props.setglobalLoaderStatus(false);
          _this.props.loadAppConfig().then(function () {
            _this.redirectionLink();
          });
        }).catch(function (err) {
          console.log('err: ', err);
          _this.props.setglobalLoaderStatus(false);
        });
      }
    };

    _this.redirectionLink = function () {
      if (Object.keys(__WEBPACK_IMPORTED_MODULE_13_lodash___default.a.get(_this, 'props.location.lastpathName', {})).length) {
        __WEBPACK_IMPORTED_MODULE_12_react_router__["browserHistory"].push({
          pathname: _this.props.location.lastpathName.path,
          query: _this.props.location.lastpathName.params
        }, function () {
          _this.props.storeLastKnowPathName({});
        });
      } else {
        __WEBPACK_IMPORTED_MODULE_12_react_router__["browserHistory"].push('/');
      }
    };

    _this.handleUserInputs = function (e) {
      if (e.which === 13) {
        _this.validateContactDetails();
      } else {
        if (e.target.type === 'text') {
          if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11__utils_regex__["a" /* regexCheck */])('onChange', 'userName', e.target.value, 40)) {
            _this.setState({
              UsrName: e.target.value
            });
          }
        } else {
          if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11__utils_regex__["a" /* regexCheck */])('onChange', 'emailId', e.target.value, 40)) {
            _this.setState({
              UsrEmailid: e.target.value
            });
          }
        }
      }
    };

    _this.updateOTPImage = function (key) {
      _this.setState({
        otpImage: key === 'active' ? activeOTPImg : defOTPImg
      });
    };

    _this.handleTermsAndCondClick = function () {
      _this.setState({
        termsAndCondCheck: !_this.state.termsAndCondCheck
      });
    };

    _this.recaptchaOnChange = function (val) {
      console.log('val', val);
      _this.setState({
        recaptcha: val,
        recaptchaCheck: true
      });
    };

    _this.state = {
      loginPageId: 'login',
      otpValue: '',
      recaptcha: '',
      showReCaptcha: false,
      recaptchaCheck: false,
      resendOTP: false,
      ResendOTPRequest: false,
      allowResend: false,
      Phno: '',
      UsrEmailid: '',
      UsrName: '',
      showResendOTPbtn: false,
      frequentCalls: 60,
      showOTPTimer: false,
      showCallOptnBtn: false,
      otpViaCallTimer: 60,
      showCallTimer: false,
      sendOTPCounter: 0,
      selectedCountryObj: __WEBPACK_IMPORTED_MODULE_13_lodash___default.a.get(props, 'user.selectedCountryData', {}),
      BtnLoaderStatus: false,
      setFocusOTP: false,
      otpImage: defOTPImg,
      termsAndCondCheck: false,
      configFetched: false,
      phnoLengthAr: __WEBPACK_IMPORTED_MODULE_13_lodash___default.a.get(props, 'user.selectedCountryData.AllowedMobileLengths') ? props.user.selectedCountryData.AllowedMobileLengths.split(',').map(function (int) {
        return parseInt(int);
      }) : [10]
    };
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(Login, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      // let consumerDetails = _.get(this, 'props.user.consumerDetails')
      // if (consumerDetails && consumerDetails.data.isNew) {
      //   this.setState({
      //     loginPageId: 'login'
      //   })
      // } // need to see use cases
      this.props.setglobalLoaderStatus(true);
      // Fetch region details
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_15__utils_ipinfo__["a" /* lookup */])(function (regionCode) {
        window.CountryCode = regionCode;
        window.CountryID = undefined;
        var countryPromise = _this2.props.loadAppConfig();
        countryPromise.then(function () {
          _this2.setState({
            configFetched: true
          });
          var selectedObj = _this2.props.user.countries.filter(function (country) {
            return country.CountryCode === regionCode;
          })[0];
          _this2.setState({
            selectedCountryObj: selectedObj ? Object.assign({}, selectedObj, {
              label: '+' + selectedObj.PhoneCode,
              value: selectedObj.PhoneCode
            }) : Object.assign({}, _this2.props.user.countries[0], {
              label: '+' + _this2.props.user.countries[0].PhoneCode,
              value: _this2.props.user.countries[0].PhoneCode
            })
          }, function () {
            _this2.props.setSelectedCountryData(_this2.state.selectedCountryObj);
          });
          _this2.props.setglobalLoaderStatus(false);
        });
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.onpopstate = function () {
        window.location.reload();
      };
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      // clear timer related intervals
      clearInterval(window.frequentCallsFunc);
      clearInterval(window.otpViaCallFunc);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props !== nextProps) {
        var phnoLengthAr = __WEBPACK_IMPORTED_MODULE_13_lodash___default.a.get(nextProps, 'user.selectedCountryData.AllowedMobileLengths') ? nextProps.user.selectedCountryData.AllowedMobileLengths.split(',').map(function (int) {
          return parseInt(int);
        }) : [10];
        this.setState({
          phnoLengthAr: phnoLengthAr
        });
      }
    }

    // OTP funcs

  }, {
    key: 'render',
    value: function render() {
      var renderDiv = void 0;
      if (this.state.loginPageId === 'new_usr') {
        renderDiv = __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__LoginSubComponent__["c" /* LoginContactDetails */], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({ handleUserInputs: this.handleUserInputs, UsrEmailid: this.state.UsrEmailid,
          validateContactDetails: this.validateContactDetails, UsrName: this.state.UsrName,
          BtnLoaderStatus: this.state.BtnLoaderStatus }, this.props));
      } else if (this.state.loginPageId === 'otp_page') {
        renderDiv = __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__LoginSubComponent__["d" /* LoginOTP */], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({ checkOTPlength: this.checkOTPlength, checkOTP: this.checkOTP,
          sendOTPCounter: this.state.sendOTPCounter, otpValue: this.state.otpValue }, this.props, {
          frequentCalls: this.state.frequentCalls, showOTPTimer: this.state.showOTPTimer,
          ResendOtp: this.ResendOtp, showResendOTPbtn: this.state.showResendOTPbtn,
          showCallOptnBtn: this.state.showCallOptnBtn, handleOTPViaCall: this.handleOTPViaCall,
          otpViaCallTimer: this.state.otpViaCallTimer, showCallTimer: this.state.showCallTimer,
          otpImage: this.state.otpImage, updateOTPImage: this.updateOTPImage,
          BtnLoaderStatus: this.state.BtnLoaderStatus, Phno: this.state.Phno, id: 'otp-input', user: this.props.user,
          recaptchaOnChange: this.recaptchaOnChange, recaptchaCheck: this.state.recaptchaCheck,
          showReCaptcha: this.state.showReCaptcha, allowResend: this.state.allowResend }));
      } else {
        renderDiv = __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__LoginSubComponent__["e" /* LoginPhNo */], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({ handlePhNoInputChange: this.handlePhNoInputChange,
          validatePhno: this.validatePhno, Phno: this.state.Phno, phnoLengthAr: this.state.phnoLengthAr,
          selectedCountryObj: this.state.selectedCountryObj, handleCountryChange: this.handleCountryChange,
          termsAndCondCheck: this.state.termsAndCondCheck, handleTermsAndCondClick: this.handleTermsAndCondClick
        }, this.props, { BtnLoaderStatus: this.state.BtnLoaderStatus }));
      }
      var legalTxt = __WEBPACK_IMPORTED_MODULE_13_lodash___default.a.get(this, 'props.user.appConfigDetails.footerLinks.footerText');
      var poweredByText = __WEBPACK_IMPORTED_MODULE_13_lodash___default.a.get(this, 'props.user.appConfigDetails.footerLinks.poweredByText', 'Powered by Servify');
      return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
        'div',
        { className: 'row login-index' },
        this.state.configFetched ? __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
          'div',
          { className: 'col-sm-12 login-container' },
          __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
            'div',
            { className: 'header-container mb20' },
            __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('img', { src: MainLogo })
          ),
          renderDiv,
          __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
            'div',
            { className: 'mt20 ml-10' },
            legalTxt ? __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('span', { className: 'Note_Text bookFontStyle fontSmall',
              dangerouslySetInnerHTML: { __html: legalTxt } }) : '',
            __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
              'div',
              { className: 'mt10' },
              __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                'span',
                { className: 'fontMedium Note_Text' },
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__utils_constants__["a" /* BrandSpecificConfig */])().showPServifyTxt && poweredByText
              )
            )
          )
        ) : ''
      );
    }
  }]);

  return Login;
}(__WEBPACK_IMPORTED_MODULE_6_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Login);

Login.propTypes = {
  generateOTPAsync: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.func.isRequired,
  verifyOTPAsync: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.func.isRequired,
  updateUserDetailsAsync: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.func.isRequired,
  setToaster: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.func.isRequired,
  getUserDetailsAsync: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.func.isRequired,
  user: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.object.isRequired,
  login: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.object.isRequired,
  location: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.object.isRequired,
  loadAppConfig: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.func.isRequired,
  storeLastKnowPathName: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.func.isRequired,
  setSelectedCountryData: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.func.isRequired,
  getAppConfig: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.func,
  setglobalLoaderStatus: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.func.isRequired
};

/***/ }),

/***/ "./src/routes/Login/containers/LoginContainer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Login__ = __webpack_require__("./src/routes/Login/components/Login.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_login__ = __webpack_require__("./src/routes/Login/modules/login.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_user__ = __webpack_require__("./src/store/user.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_location__ = __webpack_require__("./src/store/location.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store_toastsAndLoaders__ = __webpack_require__("./src/store/toastsAndLoaders.js");


//




/*  Object of action creators (can also be function that returns object).
    Keys will be passed as props to presentational components. Here we are
    implementing our wrapper around increment; the component doesn't care   */
var mapDispatchToProps = {
  generateOTPAsync: __WEBPACK_IMPORTED_MODULE_2__modules_login__["generateOTPAsync"],
  verifyOTPAsync: __WEBPACK_IMPORTED_MODULE_2__modules_login__["verifyOTPAsync"],
  updateUserDetailsAsync: __WEBPACK_IMPORTED_MODULE_3__store_user__["k" /* updateUserDetailsAsync */],
  setToaster: __WEBPACK_IMPORTED_MODULE_5__store_toastsAndLoaders__["a" /* setToaster */],
  getUserDetailsAsync: __WEBPACK_IMPORTED_MODULE_3__store_user__["l" /* getUserDetailsAsync */],
  loadAppConfig: __WEBPACK_IMPORTED_MODULE_3__store_user__["m" /* loadAppConfig */],
  storeLastKnowPathName: __WEBPACK_IMPORTED_MODULE_4__store_location__["b" /* storeLastKnowPathName */],
  getCountriesAsync: __WEBPACK_IMPORTED_MODULE_3__store_user__["i" /* getCountriesAsync */],
  setglobalLoaderStatus: __WEBPACK_IMPORTED_MODULE_5__store_toastsAndLoaders__["b" /* setglobalLoaderStatus */],
  setSelectedCountryData: function setSelectedCountryData(obj) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__store_user__["h" /* setSelectedCountryData */])(obj);
  }
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    login: state.login,
    user: state.user,
    location: state.location
  };
};

/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(__WEBPACK_IMPORTED_MODULE_1__components_Login__["a" /* default */]));

/***/ })

});
//# sourceMappingURL=2.js.map