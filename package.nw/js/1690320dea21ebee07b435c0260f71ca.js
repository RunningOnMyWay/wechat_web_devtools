;!function(require, directRequire){;"use strict";const React=require("react"),cssConfig=require('./3b5f8e2469c474c8d433c1c6926d8999.js');class NoticeItem extends React.Component{render(){const a=this.props;return React.createElement("div",{className:"notification-item"},React.createElement("div",{className:"ui-flex"},React.createElement("h3",{className:"notification-type ui-flex-item"},a.type),React.createElement("div",{className:"notification-ext"},React.createElement("p",null,a.time))),React.createElement("div",{className:"ui-flex"},React.createElement("p",{className:"notification-desc"},a.content),React.createElement("a",{onClick:a.onLinkClick,style:a.link?{}:cssConfig.displayNone},a.link)))}}module.exports=NoticeItem;
;}(require("lazyload"), require);