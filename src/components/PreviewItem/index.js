import React, {Component} from 'react';
import './PreviewItem.scss'

class PreviewItem extends Component {
    render() {
        return (
            <div className="previev-item">
                <img className="image" src={this.props.object.img}>
                </img>
                <h3 className="name">{ this.props.object.name }</h3>
                <p className="genre">{ this.props.object.genre }</p>
            </div>
        )
    }
}

export default PreviewItem