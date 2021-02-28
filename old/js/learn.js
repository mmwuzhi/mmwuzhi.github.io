'use strict'

// ::String => ::Document
const  createDOMFromString = (domString) => {
    const div = document.createElement('div')
    div.innerHTML = domString
    return div
}

class Component {
    constructor (props = {}) {
        this.props = props
    }

    setState (state) {
        const oldEl = this.el
        this.state = state
        this._renderDOM()
        if (this.onStateChange) this.onStateChange(oldEl, this.el)
    }

    _renderDOM () {
        this.el = createDOMFromString(this.render())
        if (this.onClick) {
            // bind(this) 意思是 把实例化的的class里的this绑定给click事件创建的changeLikeText函数的this
            // 让changeLikeText能用上实例化的class里的this.state
            // 如果你传递一个函数名给一个变量，然后通过在变量后加括号’()'来调用这个方法，此时方法内部的this的指向就会丢失。
            // fn.bind相当于创建一个新的fn fn的this等于bind的第一个参数 之后再加括号来调用新创建的fn
            // fn.call()等于fn.bind()()
            this.el.addEventListener('click', this.onClick.bind(this), false)
            this.el.addEventListener('click', () => console.log('click'), false)
        }
        return this.el
    }
}

class LikeButton extends Component{
    constructor (props) {
        super(props)
        this.state = {isLiked: false}
    }

    onClick () {
        this.setState({
            isLiked: !this.state.isLiked
        })
    }

    render () {
        return`
        <button class='like-button' style='background-color: ${this.props.bgColor}'>
            <span class='like-text'>${this.state.isLiked ? 'キャンセル' : 'いいね！'}</span>
            <span>👍</span>
        </button>
        `
    }
}

const mount = (component, wrapper) => {
    wrapper.appendChild(component._renderDOM())
    component.onStateChange = (oldEl, newEl) => {
        wrapper.insertBefore(newEl, oldEl)
        wrapper.removeChild(oldEl)
    }
}

const wrapper = document.querySelector('.wrapper')
mount(new LikeButton({ bgColor: 'red'}), wrapper)



let x=true;

const h1 = document.getElementsByTagName("h1")[0];
h1.onclick = function change() {
    if (x) {
        h1.style.color = '#663399'
        h1.style.textShadow = '3px 3px 3px #ADD8E6'
        x = false
    } else {
        h1.style.color = '#ADD8E6'
        h1.style.textShadow = '3px 3px 3px #663399'
        x = true
    }
}

// alert去标题
// window.alert = function (name) {
//     const iframe = document.createElement('IFRAME');
//     iframe.style.display = 'none';
//     iframe.setAttribute('src', 'data:text/plain,');
//     document.documentElement.appendChild(iframe);
//     window.frames[0].window.alert(name);
//     iframe.parentNode.removeChild(iframe);
//   };

// function countBodyChildren(){
//     var body_element = document.getElementsByTagName("body")[0];
//     alert(body_element.childNodes.length);
// }

// window.onload = countBodyChildren();