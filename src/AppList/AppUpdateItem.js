import React from 'react';
import './AppUpdate-style.css';

class AppUpdateItem extends React.Component {
    constructor(props) {
        super(props);
      this.state={hide:true};
      this.showText=this.showText.bind(this);
      this.hideText=this.hideText.bind(this);
    }
     showText(){
         this.setState({hide:false})
     }
     hideText(){
        this.setState({hide:true})
    }
    
    render() {
        let info=this.props.info.description.map((i,index)=> <p className='feature' key={index} index={index}>{i}</p>);
        let showInfo=null;
        if(info.length <=3||(this.state.hide===false)){
            showInfo=info;
            if(this.state.hide===false){
                showInfo.push(<p className='feature hide-info' onClick={this.hideText}>收起</p>)
            }
        }else{
            showInfo=info.slice(0,3);
            showInfo.push(<p className='feature hide-info' onClick={this.showText}>更多···</p>)
        }
       return (
<div>
                <div className='AppUpdateItem'>
                    <img src={this.props.info.imgUrl} alt="icon" width='48px' height='48px'/>
                    <div className='app-info'>
                        <p className='app-name'>{this.props.info.name}</p>
                        <p className='app-version'>版本：{this.props.info.version}</p>
                        <p className='publish-info'>发布日期：{this.props.info.publishTime}</p>
                    </div>
                    <div className='feature-info'> {showInfo}</div>
                   
                    <p className='app-size'>{this.props.info.totoalSize!==this.props.info.downloadSize && `${this.props.info.downloadSize}/`}{this.props.info.totoalSize}MB</p>
                    <button onClick={this.handleClick}>更新</button>
                </div>
                <hr/>
            </div>

       )
            
    }
}

export default AppUpdateItem