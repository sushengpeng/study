import React, { Component } from 'react'
import ImageLazy from "../components/ImageLazy"
export default class Mine extends Component {
  constructor(props) {
    super(props)
    this.state = {
      src: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1456111218,1910681625&fm=26&gp=0.jpg"
    }
  }
  componentDidMount() {
    this.scrollView()
    window.addEventListener('scroll', this.scrollView, false)
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollView, false)
  }
  scrollView() {
    let lazyImages = [...document.getElementsByClassName("lazyImage")]
    var observer = new IntersectionObserver(
      function (changes) {
        changes.forEach((change, index) => {
          var container = change.target;
          // console.log(change.intersectionRatio)
          if (change.intersectionRatio > 0) {
            container.setAttribute("src", container.getAttribute("data-src"))
            container.removeAttribute("data-src")
            container.className = container.className.replace(/lazyImage/, '')
          }
          // var content = container.querySelector('template').content;
          // container.appendChild(content);
          observer.unobserve(container);
        });
      }
    );
    lazyImages.forEach(function (item) {
      observer.observe(item);
    })
  }
  render() {
    return (
      <div>
        <ImageLazy src={this.state.src} style={{ width: '70%', height: '200px' }}></ImageLazy>
        <ImageLazy src={this.state.src} style={{ width: '60%', height: '100px' }}></ImageLazy>
        <ImageLazy src={this.state.src}></ImageLazy>
        <ImageLazy src={this.state.src}></ImageLazy>
        <ImageLazy src={this.state.src}></ImageLazy>
        <ImageLazy src={this.state.src}></ImageLazy>
        <ImageLazy src={this.state.src}></ImageLazy>
        <ImageLazy src={this.state.src}></ImageLazy>
        <ImageLazy src={this.state.src}></ImageLazy>
        <ImageLazy src={this.state.src}></ImageLazy>
        <ImageLazy src={this.state.src}></ImageLazy>
        <ImageLazy src={this.state.src}></ImageLazy>
        <ImageLazy src={this.state.src}></ImageLazy>
        <ImageLazy src={this.state.src}></ImageLazy>
        <ImageLazy src={this.state.src}></ImageLazy>
      </div>
    )
  }
}
