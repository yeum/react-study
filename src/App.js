import React, {Component} from 'react';
import TOC from "./components/TOC";
import Content from "./components/Content";
import Subject from "./components/Subject";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode:'read',
      subject:{title:'WEB', sub:'World Wide Web!'},
      welcome:{title:'Welcome', desc:'Hello, React!!'},
      components:[
        {id:1, title:"HTML", desc:'HTML is HyperText ...'},
        {id:2, title:"CSS", desc:'CSS is for design ...'},
        {id:3, title:"JavaScript", desc:'JavaScript is for interactive ...'}
      ]
    }
  }

  render () {
    console.log('App render');
    var _title, _desc = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if(this.state.mode === 'read'){
      _title = this.state.components[0].title;
      _desc = this.state.components[0].desc;
    }

    return (
      <div className="App">
        {/* <Subject title={this.state.subject.title} sub={this.state.subject.sub}></Subject> */}
        <header>
              <h1><a href="/" onClick={function(e){
                console.log(e);
                // 기본적으로 작동하는 기능을 못 하게 하는 함수(ex 페이지 리로드)
                e.preventDefault();
                this.setState({
                  mode:'welcome'
                });
              }.bind(this)}>{this.state.subject.title}</a></h1>
              {this.state.subject.sub}
        </header>
        <TOC data={this.state.components}></TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;