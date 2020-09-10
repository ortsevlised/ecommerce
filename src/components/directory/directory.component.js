import React, {Component} from "react";
import './directory.component.scss'
import MenuItem from "../menu-item/menu-item.component";

class Directory extends Component {
    constructor() {
        super();
        this.state = {
            sections: [
                {
                    'id': 1,
                    'item': 'hat',
                    'imgUrl': 'https://scontent.fdub4-1.fna.fbcdn.net/v/t1.0-9/118950433_327360588706292_2675987918412598464_o.jpg?_nc_cat=100&_nc_sid=9e2e56&_nc_ohc=JOzrpkL8uN4AX8SF_K-&_nc_ht=scontent.fdub4-1.fna&oh=ae43c0636f4ae6da770c7fed3e8c7986&oe=5F7E7D69'
                },
                {
                    'id': 2,
                    'item': 'sdsd',
                    'imgUrl': 'https://scontent.fdub4-1.fna.fbcdn.net/v/t1.0-9/118296035_319350409507310_7348987858056941915_o.jpg?_nc_cat=104&_nc_sid=9267fe&_nc_ohc=zqXaPRlIttsAX_EJwr5&_nc_ht=scontent.fdub4-1.fna&oh=2373c18b3cb48103fdff6d36e0cf2eaf&oe=5F7E909B'
                },
                {
                    'id': 3,
                    'item': 'waa',
                    'imgUrl': 'https://scontent.fdub4-1.fna.fbcdn.net/v/t1.0-9/75051720_121262712649415_2623811833412190208_o.jpg?_nc_cat=111&_nc_sid=9267fe&_nc_ohc=6OP6NNpkg2kAX9khnKZ&_nc_ht=scontent.fdub4-1.fna&oh=8696c83006f011acc4c7f68c96216dc6&oe=5F7F0C98'
                },
                {
                    'id': 4,
                    'size': 'large',

                    'item': 'dog',
                    'imgUrl': 'https://scontent.fdub4-1.fna.fbcdn.net/v/t1.0-9/118762115_322605955848422_653675378369032305_o.jpg?_nc_cat=103&_nc_sid=a26aad&_nc_ohc=4UX6q145AqQAX-_PY_3&_nc_ht=scontent.fdub4-1.fna&oh=20b1328c79b19dcc24e524adfa61e8e5&oe=5F803F2B'
                },
                {
                    'id': 5,
                    'item': 'hasdat',
                    'size': 'large',
                    'imgUrl': 'https://scontent.fdub4-1.fna.fbcdn.net/v/t1.0-9/97948531_244518343657184_5611733178654916608_o.jpg?_nc_cat=107&_nc_sid=9267fe&_nc_ohc=gRuRHTfGupYAX-Epgt7&_nc_ht=scontent.fdub4-1.fna&oh=fb1f953fefd6f7ec9a0dc5088542b920&oe=5F7F81A4'
                }
            ]
        }
    }

    render() {
        return <div className="directory-menu">
            {
                this.state.sections.map(({id, item, imgUrl, size}) =>
                    <MenuItem key={id} title={item} imageUrl={imgUrl} size={size}/>)
            }
        </div>
    }
}

export default Directory

