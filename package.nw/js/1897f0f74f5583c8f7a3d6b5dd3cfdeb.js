'use strict';!function(require,directRequire){const a=require('react'),b=require('./875171e7b864aa58d026d4fa0999fbd1.js'),c=require('./e3681b47a6ce46a8998b8cdff40bdb12.js');class d extends a.Component{constructor(a){super(a),this.state={lazyLoaded:a.show,show:a.show,value:a.defaultValue},this.confirmType={done:'\u5B8C\u6210',search:'\u641C\u7D22',next:'\u4E0B\u4E00\u4E2A',go:'\u524D\u5F80',send:'\u53D1\u9001'}}componentWillReceiveProps(a){let b={show:a.show};a.show!=this.props.show&&(a.show?b.lazyLoaded=!0:c.triggerOnEvent({eventName:'onKeyboardComplete',data:{value:this.state.value}})),a.defaultValue!=this.props.defaultValue&&(b.value=a.defaultValue),a.update&&a.update!=this.props.update&&(b.value=a.update.value),this.setState(b)}onInputChange(a){let b=a.target.value;c.triggerOnEvent({eventName:'onKeyboardInput',data:{value:b}}),this.setState({value:b})}onButtonClick(){c.triggerOnEvent({eventName:'onKeyboardConfirm',data:{value:this.state.value}}),this.props.confirmHold||this.props.hideKeyboard()}onAnimationOut(){}render(){if(!this.state.lazyLoaded)return null;const c=this.props,d={outline:'none',resize:'none',border:'none',caretColor:'blue',borderRadius:5,height:30,flex:1,margin:10,padding:5,fontSize:14};return a.createElement(b,{show:this.state.show,inClassName:'ui-animate-pull-up',outClassName:'ui-animate-pull-down',onAnimationOut:this.onAnimationOut.bind(this)},a.createElement('div',{style:{zIndex:1e3,position:'fixed',bottom:0,height:200,width:'100%',background:'#e2edf3'}},a.createElement('div',{style:{width:'100%',display:'inline-flex',flexDirection:'row',justifyContent:'center'}},c.multiple?a.createElement('textarea',{value:this.state.value,style:d,maxLength:c.maxLength,onChange:this.onInputChange.bind(this)}):a.createElement('input',{value:this.state.value,style:d,maxLength:c.maxLength,onChange:this.onInputChange.bind(this)}),a.createElement('div',{style:{margin:10,marginLeft:0},className:'ui-button',onClick:this.onButtonClick.bind(this)},this.confirmType[c.confirmType]||'\u786E\u5B9A')),a.createElement('div',{style:{}})))}}module.exports=d}(require('lazyload'),require);