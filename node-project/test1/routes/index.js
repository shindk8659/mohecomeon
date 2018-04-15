var express = require('express');
var router = express.Router();


Date.prototype.YYMMDDhhmm = function() {
  var yyyy = this.getFullYear().toString();
  var mmmm = (this.getMonth() + 1).toString(); // getMonth() is zero-based
  var dd = this.getDate().toString();
  var hh = this.getHours().toString();
  var mm = this.getMinutes().toString();

  return yyyy+':'+ (mmmm[1]?mmmm:"0"+mmmm[0]) + ':' + (dd[1]?dd:"0"+dd[0]) + ':' + (hh[1]?hh:"0"+hh[0]) + ':' + (mm[1]?mm:"0"+mm[0]);
};
var date = new Date();
var time=date.YYMMDDhhmm();

//로그인 창
router.get('/login/:success', function(req, res, next) {
  var test = {"success":req.params.success}
  res.render('login',test);
});
//회원가입창
router.get('/signUp', function(req, res, next) {
  res.render('signUp');
});
//메인화면 아이디 패스워드확인
router.get('/confirmmeeting', function(req, res, next) {
  res.render('confirmmeeting');
});
router.get('/imademeeting', function(req, res, next) {
  res.render('imademeeting');
});
router.get('/login', function(req, res, next) {
  res.render('login');
});
router.get('/makemeeting', function(req, res, next) {
  res.render('makemeeting');
});
router.get('/makemeetingOk', function(req, res, next) {
  res.render('makemeetingOk');
});
router.get('/meetinginfo_manager', function(req, res, next) {
  res.render('meetinginfo_manager');
});
router.get('/meetinginfo_usr', function(req, res, next) {
  res.render('meetinginfo_usr');
});
router.get('/mymeeting', function(req, res, next) {
  res.render('mymeeting');
});
router.get('/profilechange', function(req, res, next) {
  res.render('profilechange');
});
router.get('/profileconfirm_manager', function(req, res, next) {
  res.render('profileconfirm_manager');
});
router.get('/profileconfirm_usr', function(req, res, next) {
  res.render('profileconfirm_usr');
});
router.get('/searchmeeting', function(req, res, next) {
  res.render('searchmeeting');
});
router.get('/signUp', function(req, res, next) {
  res.render('signUp');
});
router.get('/signUpOk', function(req, res, next) {
  res.render('signUpOk');
});
router.get('/main', function(req, res, next) {
  res.render('main');
});
router.get('/meetingchange', function(req, res, next) {
  res.render('meetingchange');
});
router.get('/waitaccept', function(req, res, next) {
  res.render('waitaccept');
});
router.get('/maptest', function(req, res, next) {
  res.render('maptest');
});



module.exports = router;

